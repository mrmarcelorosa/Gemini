package com.example.Gemini.service;

import com.example.Gemini.model.Questionario;
import com.example.Gemini.model.User;
import com.example.Gemini.repository.QuestionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class QuestionarioService {

    @Autowired
    QuestionarioRepository repository;

    public Questionario save(Questionario questionario){
        return repository.save(questionario);
    }
}
