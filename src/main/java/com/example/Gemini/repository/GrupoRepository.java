package com.example.Gemini.repository;

import com.example.Gemini.model.Grupo;
import com.example.Gemini.model.User;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface GrupoRepository extends CrudRepository<Grupo, Long> {
    List<Grupo> findAll();
}
