package com.example.Gemini.controller;

import com.example.Gemini.model.Questao;
import com.example.Gemini.model.Questionario;
import com.example.Gemini.service.QuestaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questao")
public class QuestaoController {

    @Autowired
    QuestaoService service;

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Questao save(@RequestBody Questao questao){
        try{
            return service.save(questao);
        }catch (Exception e){
            return new Questao();
        }
    }
    @RequestMapping(value = "/getquestoes", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Questao> getByIdQuest(@RequestBody Integer id){

        return service.getByIdQuest(id);
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Questao> getList(){
        return service.getList();
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@RequestBody Questao questao){
        service.delete(questao);
    }


}
