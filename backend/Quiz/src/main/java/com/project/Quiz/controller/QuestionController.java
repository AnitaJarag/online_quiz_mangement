package com.project.Quiz.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Quiz.model.Question;
import com.project.Quiz.repository.QuestionRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/Quiz/")
public class QuestionController {
@Autowired
@Qualifier("queRepo")
QuestionRepository queRepo;
@GetMapping("/question/{lang}")
public ArrayList<Question> questionlang(@PathVariable("lang")String lang)
{
	return (ArrayList<Question>)queRepo.findAllByLanguage(lang);
}
@PostMapping("/question")
public Question savequestion(@RequestBody Question q)
{
	return queRepo.save(q);
}
}
