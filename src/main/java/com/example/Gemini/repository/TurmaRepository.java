package com.example.Gemini.repository;

import java.util.List;

import com.example.Gemini.model.Questionario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.Gemini.model.Turma;
import org.springframework.data.repository.query.Param;

public interface TurmaRepository extends CrudRepository<Turma, Long> {
    List<Turma> findAll();

    @Query(value = "Select t.id, t.date_creation, t.date_ending, t.description, t.name, t.mananger_id from turma t"+
            " where t.mananger_id = :id UNION ALL" +
            " Select j.id, j.date_creation, j.date_ending, j.description, j.name, j.mananger_id from turma j"+
            " INNER JOIN turma_student_list s on s.turma_id = j.id and s.student_list_id = :id", nativeQuery = true
    )
    public List<Turma> findByTurmaId(@Param("id") Long id);
}


