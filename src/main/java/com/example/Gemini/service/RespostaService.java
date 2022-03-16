package com.example.Gemini.service;

import com.example.Gemini.model.Questionario;
import com.example.Gemini.model.Resposta;
import com.example.Gemini.repository.QuestionarioRepository;
import com.example.Gemini.repository.RespostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RespostaService {

    @Autowired
    RespostaRepository repository;

    public Resposta save(Resposta resposta){
        return repository.save(resposta);
    }

    public List<Resposta> getList(){
        return repository.findAll();
    }

    public void delete(Resposta resposta){
        repository.delete(resposta);
    }
}
