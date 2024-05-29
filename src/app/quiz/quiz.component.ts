import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Addmcq } from '../models/addmcq';
import { AddmcqService } from '../service/addmcq.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  constructor(private router:Router)
  {

  }
  show(lang:string)
  {
    alert(lang)
this.router.navigate(["/html",lang])
  }
}
