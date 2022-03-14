package com.example.Gemini.DTO;

import com.example.Gemini.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TokenDTO {
	
	private String tokenString;
	private User user;

}
