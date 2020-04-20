import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Quiz } from "src/app/models/quiz";
import { Question } from '../models/question';
@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})


export class ViewQuizesComponent implements OnInit {
 quiz:Array<any> =[];

  constructor(private router: Router, private quizService: QuizService) { }
  currentQuestion:Question 
  ngOnInit(): void 
  {
    this.quizService.fetchAll()
    .subscribe((res:Array<any>)=> {
      console.log(res);
      this.quiz = res;
      this.currentQuestion = this.quiz[0].name;
      console.log(this.currentQuestion);
    })


  }


  takequiz(quiz:Quiz)
  {
    console.log("in take quiz", quiz);
    this.router.navigate(["start-quiz", quiz]);
  }

}
