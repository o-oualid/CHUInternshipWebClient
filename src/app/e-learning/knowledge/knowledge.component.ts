import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Quiz} from "../../models/Quiz";
import {Answer} from "../../models/Answer";

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  quizzes: Quiz[] = [];
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
    this.currentQuizIndex++;
  }

  previousQuiz() {
    this.currentQuizIndex--;
  }

}
