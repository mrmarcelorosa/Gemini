package com.example.Gemini.repository;

import com.example.Gemini.model.Questionario;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionarioRepository extends CrudRepository<Questionario, Long> {
    List<Questionario> findAll();
    
    @Query(value = "SELECT q FROM Questionario q " +
			 	  " INNER JOIN Turma t " +
			      " ON q.turmaId = t.id AND " +
			 	  " t.id = :idTurma " )     	   
    public List<Questionario> findByTurmaId(@Param("idTurma") Long turmaId);
}
