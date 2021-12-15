package com.example.Gemini.service;

import com.example.Gemini.model.Questao;
import com.example.Gemini.repository.QuestaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestaoService {

    @Autowired
    QuestaoRepository repository;

    public Questao save(Questao questao){
            return repository.save(questao);
    }
}
