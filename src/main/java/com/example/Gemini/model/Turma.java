package com.example.Gemini.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "turma")
public class Turma implements Serializable {
	
	private static final long serialVersionUID = -1548290491503165782L;

	@Id
    @GeneratedValue
    private long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	private User mananger;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @Column(name="dateCreation")
    private LocalDate dateCreation;
	
    @Column(name="dateEnding")
    private LocalDate dateEnding;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<User> studentList;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Grupo> groupList;

}
