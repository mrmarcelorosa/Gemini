package com.example.Gemini.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.Gemini.model.Resposta;

public interface RespostaRepository extends CrudRepository<Resposta, Long> {
	List<Resposta> findAll();

	@Query(value = "SELECT * FROM Resposta r " +
			"WHERE r.questao_id = :idQuestao", nativeQuery = true)
			List<Resposta> findAllRespostasByIdQuestao(@Param("idQuestao") Long idQuestao);
}
