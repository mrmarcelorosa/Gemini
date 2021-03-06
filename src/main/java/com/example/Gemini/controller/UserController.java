package com.example.Gemini.controller;

import java.util.List;


import com.example.Gemini.model.Questionario;
import com.example.Gemini.model.User;
import com.example.Gemini.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import com.example.Gemini.model.User;
import com.example.Gemini.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService service;

    @RequestMapping(value = "/save", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public User save(@RequestBody User user){
        try{
            return service.save(user);
        }catch (Exception e){
            return new User();
        }
    }
    
    @RequestMapping(value = "/listAll", method = RequestMethod.GET)
    public List<User> getAllUsers(){
        try{
            return service.getAll();
        }catch (Exception e){
            return null;
        }
    }

    @RequestMapping(value = "/get/{email}", method = RequestMethod.GET)
    public UserDetails getByEmail(@PathVariable("email") String email){
        return service.loadUserByUsername(email);
    }



}
