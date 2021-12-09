package com.example.Gemini.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.Gemini.model.Turma;
import com.example.Gemini.repository.TurmaRepository;

/**
 * Classe responsável por prover serviços para 
 * realizações de operações com a class {@link Turma}
 * 
 * @author Yuri Eguti
 *
 */

@Service
public class TurmaService {
	@Autowired
	TurmaRepository turmaRepository;

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
		
		if(StringUtils.hasLength(turma.getName())){
			turmaBD.setName(turma.getName());
		}
		
		if(StringUtils.hasLength(turma.getDescription())){
			turmaBD.setName(turma.getDescription());
		}
		
		if(turma.getDateCreation() != null){
			turmaBD.setDateCreation(turma.getDateCreation());
		}
		
		if(turma.getDateEnding() != null){
			turmaBD.setDateEnding(turma.getDateEnding());
		}
		
		if(turma.getStudentList() != null){
			turmaBD.setStudentList(turma.getStudentList());
		}
		
		turmaRepository.save(turmaBD);
	}
	
	public List<Turma> getAll() {
		return turmaRepository.findAll();
	}
	
	public Turma getById(Long id) {
		return turmaRepository.findById(id).get();
	}
	
	public void delete(Long id) {
		turmaRepository.deleteById(id);
	}
}
