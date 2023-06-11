import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS } from 'src/constants';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  questionsList = QUESTIONS
  questionsAnswer = false
  modalResult = false

  constructor(
    private router: Router  ) {}

  openModal(value: boolean) {
    this.modalResult = confirm('Are you sure about your answer?')
    this.questionsAnswer = value
    if (this.modalResult) {
      this.router.navigate(['/result'], { state: {result: value} });
    }
  }
}
