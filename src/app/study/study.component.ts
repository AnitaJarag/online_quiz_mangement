import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent {

}
