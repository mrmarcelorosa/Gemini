package com.example.Gemini.service;

import com.example.Gemini.model.Grupo;
import com.example.Gemini.model.Questionario;
import com.example.Gemini.model.User;
import com.example.Gemini.repository.GrupoRepository;
import com.example.Gemini.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GrupoService {
    @Autowired
    GrupoRepository repository;
    public Grupo save(Grupo grupo){
        return repository.save(grupo);
    }
    public ArrayList<Grupo> findAll(){
        return (ArrayList<Grupo>) repository.findAll();
    }
    public List<Grupo> getArrayList() {
        return repository.findAll();
    }
    public boolean delete(Grupo grupo){
        try {
            repository.delete(grupo);
            return true;
        }catch(Exception e){
            return false;
        }
    }
    public Optional<Grupo> getById(Long id){
        return repository.findById(id);
    }
}
