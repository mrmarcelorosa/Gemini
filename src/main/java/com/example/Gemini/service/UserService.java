package com.example.Gemini.service;

import com.example.Gemini.model.User;
import com.example.Gemini.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User save(User user){
        return repository.save(user);
    }
}
