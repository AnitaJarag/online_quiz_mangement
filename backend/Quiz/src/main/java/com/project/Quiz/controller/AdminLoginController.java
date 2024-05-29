package com.project.Quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Quiz.model.AdminLogin;
import com.project.Quiz.repository.AdminLoginRepository;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/Quiz")
public class AdminLoginController {
	@Autowired
    @Qualifier("admRepo")
	AdminLoginRepository admRepo ;
	@GetMapping("/AdminLogin/{emailid}/{password}")
	   public AdminLogin login(@PathVariable("emailid")String emailid,@PathVariable("password")String password)
	   {
		   return admRepo.findByEmailIdAndPassword(emailid, password);
	   }
	
}
