package com.example.Gemini.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.Gemini.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAll();
    
    @Query(value= "SELECT u from User u WHERE u.email = ?1")
    public Optional<User> findByEmail(String email);
}