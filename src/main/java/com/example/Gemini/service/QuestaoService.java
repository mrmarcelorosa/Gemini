package com.example.Gemini.service;

import com.example.Gemini.model.Questao;
import com.example.Gemini.model.Questionario;
import com.example.Gemini.repository.QuestaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestaoService {

    @Autowired
    QuestaoRepository repository;

    public Questao save(Questao questao){
            return repository.save(questao);
    }

    public List<Questao> getList(){
        return repository.findAll();
    }

    public List<Questao> getByIdQuest(Integer id){
        return repository.findByIdQuest(id);
    }

    public void delete(Questao q){
        repository.delete(q);
    }
}
