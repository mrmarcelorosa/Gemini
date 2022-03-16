package com.example.Gemini.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "resposta")
public class Resposta implements Serializable {
    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue
    private long id;

    @Column(name="resposta")
    private String resposta;

    @Column(name="id_quest")
    private Integer idQuest;

    @Column(name="id_user")
    private Integer idUser;

    @Column(name="id_grupo")
    private Integer idGrupo;

}
