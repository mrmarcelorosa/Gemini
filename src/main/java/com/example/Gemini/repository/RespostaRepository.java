package com.example.Gemini.repository;

import com.example.Gemini.model.Questao;
import com.example.Gemini.model.Resposta;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RespostaRepository extends CrudRepository<Resposta, Long> {
    List<Resposta> findAll();
}
