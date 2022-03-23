package com.example.Gemini.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gemini.exceptions.TurmaException;
import com.example.Gemini.model.Turma;
import com.example.Gemini.model.User;
import com.example.Gemini.service.TurmaService;

@RestController
@RequestMapping("/turma")
public class TurmaController {

	@Autowired
	TurmaService turmaService;

	@RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Turma save(@RequestBody Turma turma) {
		return turmaService.save(turma);
	}

	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Turma update(@RequestBody Turma turma) {
		return turmaService.save(turma);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id) {
		turmaService.delete(id);
	}

	@RequestMapping(value = "/listAll/{id}", method = RequestMethod.GET)
	public List<Turma> listAll(@PathVariable("id") Long id) {
		return turmaService.getUserId(id);
	}

	@RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
	public Turma get(@PathVariable("id") Long id) {
		return turmaService.getById(id);
	}

	@RequestMapping(value = "/adicionarAlunoTurma/{idTurma}", method = RequestMethod.POST)
	public ResponseEntity<String> addStudent(@RequestBody User user, @PathVariable("idTurma") Long idTurma) {

		try {
			this.turmaService.addStudentToTurma(user, idTurma);
		} catch (TurmaException ex) {
			return new ResponseEntity<String>(ex.getMessage(), HttpStatus.EXPECTATION_FAILED);
		} catch (Exception e) {
			return new ResponseEntity<String>("Erro ao inserir: " + e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		return new ResponseEntity<String>("Adicionado com sucesso", HttpStatus.OK);
	}

	@RequestMapping(value = "/adicionarAlunosTurma/{idTurma}", method = RequestMethod.POST)
	public ResponseEntity<String> addStudents(@RequestBody List<User> users, @PathVariable("idTurma") Long idTurma) {

		try {
			this.turmaService.addStudentsToTurma(users, idTurma);
		} catch (TurmaException ex) {
			return new ResponseEntity<String>(ex.getMessage(), HttpStatus.EXPECTATION_FAILED);
		} catch (Exception e) {
			return new ResponseEntity<String>("Erro ao inserir: " + e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		return new ResponseEntity<String>("Adicionado com sucesso", HttpStatus.OK);
	}

}
