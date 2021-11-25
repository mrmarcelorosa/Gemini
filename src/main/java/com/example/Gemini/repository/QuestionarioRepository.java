package com.example.Gemini.repository;

import com.example.Gemini.model.Questionario;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestionarioRepository extends CrudRepository<Questionario, Long> {
    List<Questionario> findAll();
}
