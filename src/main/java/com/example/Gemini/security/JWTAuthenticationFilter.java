package com.example.Gemini.security;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.Gemini.DTO.CredentialDTO;
import com.example.Gemini.DTO.TokenDTO;
import com.example.Gemini.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
        setFilterProcessesUrl("/login"); 
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        try {
        	CredentialDTO creds = new ObjectMapper()
                    .readValue(req.getInputStream(), CredentialDTO.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getEmail(),
                            creds.getPassword(),
                            new ArrayList<>())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException {
    	User loggedUser = (User) auth.getPrincipal();
    	String userJson = this.getStringJsonFromUser(loggedUser);
    	
        String token = JWT.create()
                .withSubject(userJson)
                .withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SecurityConstants.SECRET.getBytes()));

        TokenDTO tokenDTO = new TokenDTO();
        tokenDTO.setTokenString(token);
        tokenDTO.setUser(loggedUser);
                
        res.addHeader(SecurityConstants.HEADER_STRING, token);
        res.getWriter().write(this.getStringJsonFromTokenDTO(tokenDTO));
        res.getWriter().flush();
        
    }
    
    private String getStringJsonFromTokenDTO(TokenDTO tokenDTO) {
        Gson gson = new Gson();    
        String json = gson.toJson(tokenDTO);
        
        return json;
    }
    
    private String getStringJsonFromUser(User user) {
        Gson gson = new Gson();    
        String json = gson.toJson(user);
        
        return json;
    }
}

