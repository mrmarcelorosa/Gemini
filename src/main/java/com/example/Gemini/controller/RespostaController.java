package com.example.Gemini.controller;

import com.example.Gemini.model.Resposta;
import com.example.Gemini.service.RespostaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/resposta")
public class RespostaController {

    @Autowired
    RespostaService service;

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Resposta save(@RequestBody Resposta resposta){
        try{
            return service.save(resposta);
        }catch (Exception e){
            return new Resposta();
        }
    }

    @RequestMapping(value = "/save/list", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> saveList(@RequestBody List<Resposta> resposta){
        try{
            return ResponseEntity.status(HttpStatus.CREATED).body(service.saveList(resposta));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Erro ao salvar lista");
        }
    }
    
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Resposta> getList(){
        return service.getList();
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@RequestBody Resposta resposta){
        service.delete(resposta);
    }
}
