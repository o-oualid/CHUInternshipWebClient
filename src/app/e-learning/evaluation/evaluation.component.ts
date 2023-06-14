import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../models/Quiz";
import {FormBuilder, Validators} from "@angular/forms";
import {Answer} from "../../models/Answer";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
})
export class EvaluationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  form = this.formBuilder.group({
    classification: ['', Validators.required],
    notes: [''],
  });
  quizzes: Quiz[] = [];
  answers: Answer[] = [];
  currentQuizIndex = 1;

  score = 0;


  ngOnInit(): void {
    this.quizzes.push({classification: "Class1", image: "assets/OIP.jpeg", notes: ""});
    this.quizzes.push({classification: "Class2", image: "assets/R.jpeg", notes: ""});
    this.quizzes.push({classification: "Class3", image: "assets/R (1).jpeg", notes: ""});
    this.quizzes.push({classification: "Class4", image: "assets/test.jpeg", notes: ""});
    this.quizzes.push({classification: "None", image: "assets/test0.jpg", notes: ""});
  }

  nextQuiz() {
    this.answers[this.currentQuizIndex - 1] = {
      classification: this.form.get('classification')?.getRawValue(),
      notes: this.form.get('notes')?.getRawValue()
    }
    this.currentQuizIndex++;
    this.form.get('classification')?.patchValue(this.answers.length >= this.currentQuizIndex ? this.answers[this.currentQuizIndex - 1].classification : '');
    this.form.get('notes')?.patchValue(this.answers.length >= this.currentQuizIndex ? this.answers[this.currentQuizIndex - 1].notes : '');
    if (this.currentQuizIndex > this.quizzes.length) {
      for (let i = 0; i < this.quizzes.length; i++)
        if (this.quizzes[i].classification === this.answers[i].classification) this.score++;
      this.score = this.score / this.quizzes.length;
    }
  }

  previousQuiz() {
    this.answers[this.currentQuizIndex - 1] = {
      classification: this.form.get('classification')?.getRawValue(),
      notes: this.form.get('notes')?.getRawValue()
    }
    this.currentQuizIndex--;
    this.form.get('classification')?.patchValue(this.answers.length >= this.currentQuizIndex ? this.answers[this.currentQuizIndex - 1].classification : '');
    this.form.get('notes')?.patchValue(this.answers.length >= this.currentQuizIndex ? this.answers[this.currentQuizIndex - 1].notes : '');
  }

}
