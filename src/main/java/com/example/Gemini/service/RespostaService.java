package com.example.Gemini.service;

import com.example.Gemini.model.Resposta;
import com.example.Gemini.repository.RespostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RespostaService {

	@Autowired
	RespostaRepository repository;

	public Resposta save(Resposta resposta) {
		return repository.save(resposta);
	}

	public Iterable<Resposta> saveList(List<Resposta> resp) {
		return repository.saveAll(resp);
	}

	public List<Resposta> getList() {
		return repository.findAll();
	}

	public void delete(Resposta resposta) {
		repository.delete(resposta);
	}

	public List<Resposta> getListaRespostasByIdQuestao(Long idQuestao) {
		return repository.findAllRespostasByIdQuestao(idQuestao);
	}
}
