package com.example.Gemini.DTO;

import java.util.List;

import com.example.Gemini.model.Resposta;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestaoDTO {

    private long id;

    private long idquest;

    private String name;

    private String alternativas; //alternativas juntas aqui e pra separar usar função split("")

    private String resposta;

    private int tipo_alternativa;
    List<Resposta> listaRespostasQuestao;
}