package com.example.Gemini.controller;

import com.example.Gemini.model.Questionario;
import com.example.Gemini.model.Resposta;
import com.example.Gemini.service.RespostaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Resposta> getList(){
        return service.getList();
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@RequestBody Resposta resposta){
        service.delete(resposta);
    }
}
