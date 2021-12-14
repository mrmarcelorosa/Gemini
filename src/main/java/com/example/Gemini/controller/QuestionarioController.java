package com.example.Gemini.controller;

import com.example.Gemini.model.Questionario;
import com.example.Gemini.service.QuestionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questionario")
public class QuestionarioController {

    @Autowired
    QuestionarioService service;

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Questionario save(@RequestBody Questionario questionario){
        try{
            return service.save(questionario);
        }catch (Exception e){
            return new Questionario();
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Questionario> getList(){
        return service.getList();
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity.BodyBuilder delete(@RequestBody Questionario questionario){
            if(service.delete(questionario)){
                return ResponseEntity.ok();
            }else{
                return ResponseEntity.badRequest();
            }
    }
}
