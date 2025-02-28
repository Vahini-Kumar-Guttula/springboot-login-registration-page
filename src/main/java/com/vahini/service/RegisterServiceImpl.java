package com.vahini.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.vahini.entity.User;
import com.vahini.repository.UserRepository;

@Service
public class RegisterServiceImpl implements RegisterService{
	@Autowired// This means to get the bean called userRepository, Which is auto-generated by Spring, we will use it to handle the data
	private UserRepository userRepository;
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public boolean insertUser(String name, String email, String password ) {
		
		String encryptPassword=passwordEncoder.encode(password);
		
		User user = new User();
		user.setName(name);
		user.setEmail(email);
		user.setPassword(encryptPassword);
		
		Optional<User> optionalUser = userRepository.findByEmail(user.getEmail());
		
		if(optionalUser.isPresent()) {
			return false;
		}else {
			userRepository.save(user);
			return true;
		}
		
	}
}
