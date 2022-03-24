package com.example.Gemini.repository;

import com.example.Gemini.model.Questao;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface QuestaoRepository extends CrudRepository<Questao, Long> {
    List<Questao> findAll();

    @Query(value = "SELECT * FROM Questao q WHERE q.idquest = :idquest", nativeQuery = true)
    List<Questao> findByIdQuest(@Param("idquest") Integer idquest);
    
    @Query(value = "SELECT * FROM Questao q " +
    		"WHERE q.idquest = :idquest AND " +
    		"(q.tipo_alternativa = 1 OR q.tipo_alternativa = 2 OR q.tipo_alternativa = 3)", nativeQuery = true)
    		List<Questao> findByIdQuestionarioAdequadasRelatorio(@Param("idquest") Long idquest);
    
}
