package com.project.Quiz.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Quiz.model.Question;

@Repository
@Qualifier("queRepo")
public interface QuestionRepository extends JpaRepository<Question,Long> {
List<Question>findAllByLanguage(String Language);

}
