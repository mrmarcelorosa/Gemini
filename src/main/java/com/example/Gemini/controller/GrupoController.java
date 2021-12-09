package com.example.Gemini.controller;

import com.example.Gemini.model.Grupo;
import com.example.Gemini.model.User;
import com.example.Gemini.service.GrupoService;
import com.example.Gemini.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/grupo")
public class GrupoController {
    @Autowired
    GrupoService service;

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Grupo save(@RequestBody Grupo grupo){
        try{
            return service.save(grupo);
        }catch (Exception e){
            return new Grupo();
        }
    }
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Grupo> getList(){
        return service.getArrayList();
    }
    @RequestMapping(value = "/delete", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean delete(@RequestBody Grupo grupo){
            return service.delete(grupo);
    }
}
