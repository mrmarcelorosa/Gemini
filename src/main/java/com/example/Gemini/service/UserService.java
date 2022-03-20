package com.example.Gemini.service;

import com.example.Gemini.model.User;
import com.example.Gemini.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	UserRepository repository;

	public User save(User user) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		return repository.save(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optional = repository.findByEmail(username);

		if (optional.isPresent()) {
			return optional.get();
		}

		throw new UsernameNotFoundException("Usuário não encontrado.");
	}

	public User getUserById(Long userId) {
		Optional<User> optional = repository.findById(userId);

		if (optional.isPresent()) {
			return optional.get();
		}

		throw new UsernameNotFoundException("Usuário não encontrado.");
	}

	public List<User> getAll() {
		return repository.findAll();
	}

}
