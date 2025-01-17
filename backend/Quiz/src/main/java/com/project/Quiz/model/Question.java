package com.project.Quiz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Question {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long queno;
private String quename,language,opt1,opt2,opt3,opt4,ans;
public Question() {
	super();
	// TODO Auto-generated constructor stub
}
public Question(String quename, String language, String opt1, String opt2, String opt3, String opt4, String ans) {
	super();
	this.quename = quename;
	this.language = language;
	this.opt1 = opt1;
	this.opt2 = opt2;
	this.opt3 = opt3;
	this.opt4 = opt4;
	this.ans = ans;
}
public long getQueno() {
	return queno;
}
public void setQueno(long queno) {
	this.queno = queno;
}
public String getQuename() {
	return quename;
}
public void setQuename(String quename) {
	this.quename = quename;
}
public String getLanguage() {
	return language;
}
public void setLanguage(String language) {
	this.language = language;
}
public String getOpt1() {
	return opt1;
}
public void setOpt1(String opt1) {
	this.opt1 = opt1;
}
public String getOpt2() {
	return opt2;
}
public void setOpt2(String opt2) {
	this.opt2 = opt2;
}
public String getOpt3() {
	return opt3;
}
public void setOpt3(String opt3) {
	this.opt3 = opt3;
}
public String getOpt4() {
	return opt4;
}
public void setOpt4(String opt4) {
	this.opt4 = opt4;
}
public String getAns() {
	return ans;
}
public void setAns(String ans) {
	this.ans = ans;
}

}
