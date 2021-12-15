package com.example.Gemini.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.Gemini.model.Turma;

public interface TurmaRepository extends CrudRepository<Turma, Long> {
    List<Turma> findAll();
}

