package com.example.Gemini.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Gemini.model.Questionario;
import com.example.Gemini.repository.QuestionarioRepository;

@Service
public class QuestionarioService {

    @Autowired
    QuestionarioRepository repository;

    public Questionario save(Questionario questionario){
        return repository.save(questionario);
    }

    public List<Questionario> getList(){
        return repository.findAll();
    }

    public void delete(Questionario q){
            repository.delete(q);
    }
    
    public List<Questionario> getQuestionariosByIdTurma(Long idTurma) {
    	return repository.findByTurmaId(idTurma);
    }
    
    public Questionario getById(Long idQuestionario){
        Optional<Questionario> optQuestionario = repository.findById(idQuestionario);
        Questionario questionario = optQuestionario.isPresent() ? optQuestionario.get() : null;
        
        return questionario;
    }
}
