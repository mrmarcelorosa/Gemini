package com.example.Gemini.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "questao")
public class Questao implements Serializable{
    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue
    private long id;

    @Column(name= "id_questionario")
    private long id_questionario;

    @Column(name = "name")
    private String name;

    @Column(name = "alternativas")
    private String alternativas; //alternativas juntas aqui e pra separar usar função split("")

    @Column
    private String resposta;

    @Column
    private int tipo_alternativa;

}
