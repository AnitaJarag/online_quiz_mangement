package com.project.Quiz.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Quiz.model.Register;
import com.project.Quiz.repository.RegisterRepository;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/Quiz")
public class RegisterController {
    @Autowired
    @Qualifier("regRepo")
    RegisterRepository regRepo;
    
    @GetMapping("/register")
    public ArrayList<Register> register()
    {
    	return (ArrayList<Register>)regRepo.findAll();
    }
   @PostMapping("/register")
   public Register handlepost(@RequestBody Register r)
   {
	   return regRepo.save(r);
   }
   @GetMapping("/register/{emailid}/{password}")
   public Register login(@PathVariable("emailid")String emailid,@PathVariable("password")String password)
   {
	   return regRepo.findByEmailIdAndPassword(emailid, password);
   }
   
}














