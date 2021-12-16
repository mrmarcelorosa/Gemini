package com.example.Gemini.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Gemini.model.Turma;
import com.example.Gemini.service.TurmaService;

@RestController
@RequestMapping("/turma")
public class TurmaController {

    @Autowired
    TurmaService turmaService;

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Turma save(@RequestBody Turma turma){
       return turmaService.save(turma);
    }
    
    @RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Turma update(@RequestBody Turma turma){
       return turmaService.save(turma);
    }
    
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id){
       turmaService.delete(id);
    }
    
    @RequestMapping(value = "/listAll", method = RequestMethod.GET)
    public List<Turma> listAll(){
       return turmaService.getAll();
    }
    
    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public Turma get(@PathVariable("id") Long id){
       return turmaService.getById(id);
    }
    
    @RequestMapping(value = "/adicionarAlunosTurma", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Turma adicionarAlunosTurma(@RequestBody Turma turma){
       return turmaService.addTurmaStudents(turma);
    }
  
}
