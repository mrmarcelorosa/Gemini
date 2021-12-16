package com.example.Gemini.repository;

import com.example.Gemini.model.Questao;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestaoRepository extends CrudRepository<Questao, Long> {
    List<Questao> findAll();
    List<Questao> getByIdQuestionario(Integer idquest);
}
