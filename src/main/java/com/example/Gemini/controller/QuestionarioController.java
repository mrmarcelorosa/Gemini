package com.example.Gemini.controller;

import java.util.List;
import java.util.Optional;

import com.example.Gemini.model.Questao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gemini.model.Questionario;
import com.example.Gemini.service.QuestionarioService;

@RestController
@RequestMapping("/questionario")
public class QuestionarioController {

	@Autowired
	QuestionarioService service;

	@RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Questionario save(@RequestBody Questionario questionario) {
		try {
			return service.save(questionario);
		} catch (Exception e) {
			return new Questionario();
		}
	}

	@RequestMapping(value = "/get", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Questionario getByIdQuest(@RequestBody Long id){
		Optional<Questionario> optional = service.getById(id);
		return optional.get();
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Questionario> getList() {
		return service.getList();
	}

	@RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void delete(@RequestBody Questionario questionario) {
		service.delete(questionario);
	}

	@RequestMapping(value = "/listByTurmaId/{idTurma}", method = RequestMethod.GET)
	public List<Questionario> getQuestionarioListByIdTurma(@PathVariable("idTurma") Long idTurma) {
		return service.getQuestionariosByIdTurma(idTurma);
	}

}
