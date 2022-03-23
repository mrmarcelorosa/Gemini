package com.example.Gemini.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.Gemini.exceptions.TurmaException;
import com.example.Gemini.model.Questionario;
import com.example.Gemini.model.Turma;
import com.example.Gemini.model.User;
import com.example.Gemini.repository.TurmaRepository;

/**
 * Classe responsável por prover serviços para realizações de operações com a
 * class {@link Turma}
 * 
 * @author Yuri Eguti
 *
 */

@Service
public class TurmaService {
	@Autowired
	TurmaRepository turmaRepository;
	
	@Autowired
	UserService userService;

	public Turma save(Turma turma) {
		return turmaRepository.save(turma);
	}

	/**
	 * Atualiza os dados de {@link Turma}
	 * 
	 * @param turma
	 */
	public void uptate(Turma turma) {
		Turma turmaBD = getById(turma.getId());

		if (StringUtils.hasLength(turma.getName())) {
			turmaBD.setName(turma.getName());
		}

		if (StringUtils.hasLength(turma.getDescription())) {
			turmaBD.setName(turma.getDescription());
		}

		if (turma.getDateCreation() != null) {
			turmaBD.setDateCreation(turma.getDateCreation());
		}

		if (turma.getDateEnding() != null) {
			turmaBD.setDateEnding(turma.getDateEnding());
		}

		if (turma.getStudentList() != null) {
			turmaBD.setStudentList(turma.getStudentList());
		}

		turmaRepository.save(turmaBD);
	}

	public List<Turma> getAll() {
		return turmaRepository.findAll();
	}

	public Turma getById(Long id) {
		Optional<Turma> optTurma = turmaRepository.findById(id);
        Turma turma = optTurma.isPresent() ? optTurma.get() : null;
        
        return turma;
	}

	public void delete(Long id) {
		turmaRepository.deleteById(id);
	}

	public void addStudentsToTurma(List<User> users, Long idTurma) throws Exception {
		for (User user : users) {
			this.addStudentToTurma(user, idTurma);
		}
	}

	public void addStudentToTurma(User user, Long idTurma) throws Exception {
		Turma turma = this.getById(idTurma);
		Boolean turmaExist = turma != null;
		Boolean userNotNull = user != null;
		User persistedUser = null;

		if (!turmaExist || !userNotNull) {
			throw new TurmaException("Turma ou usuário não encontrado.", null);
		}

		persistedUser = userService.getUserById(user.getId());
		validateTurmaAndUser(turma, persistedUser);

		turma.getStudentList().add(persistedUser);
		this.uptate(turma);
	}

	private void validateTurmaAndUser(Turma turma, User persistedUser) throws Exception {
		if (isStudentAlreadyInserted(turma.getStudentList(), persistedUser)) {
			throw new TurmaException("Usuário já adicionado a turma.", null);
		}

		if (isStudentToInsertAlsoMananger(turma, persistedUser)) {
			throw new TurmaException(
					"Usuário informado não pode ser adicionado por já está cadastrado para gerenciamento da turma.",
					null);
		}
	}

	private boolean isStudentToInsertAlsoMananger(Turma turma, User userToInsert) {
		return turma.getMananger().getId() == userToInsert.getId();
	}

	private boolean isStudentAlreadyInserted(List<User> studentsTurma, User studentToInsert) {

		User localizedStudent = studentsTurma.stream().filter(student -> student.getId() == studentToInsert.getId())
				.findAny().orElse(null);

		return localizedStudent != null;
	}
	

	public void updateStudentListTurma(List<Long> usersIds, Long idTurma) throws Exception {
        List<User> newListUser = new ArrayList<User>();
        Turma turma = this.getById(idTurma);

        for(Long userId : usersIds) {
            User user = userService.getUserById(userId);
            newListUser.add(user);
        }

        turma.setStudentList(newListUser);
        this.uptate(turma);
    }

    public List<Turma> getUserId(Long id) {
		return turmaRepository.findByTurmaId(id);
    }
}
