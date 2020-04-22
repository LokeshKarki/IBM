import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Choice } from '../models/choice';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

  constructor(private quizService : QuizService, private route: ActivatedRoute,private router: Router  ) { }

  quizName:string;
  questions:Array<Question>;
  currentQuestion:any ;
  index:number;
  questionName:string; 
  choice:Array<Choice>;
  quesNumber:number;
  noOfQues:number;
  isLast:boolean=false;
  isFirst:boolean=false;
  answer: Array<any>=[];
  count:number =0;
  quiz:Quiz;
  length:number;
  question:Question;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('name'));
     this.quizName=params.get('name');
     console.log("name=",this.quizName);
     /*this.tryQuestion=params.get('questions');
     console.log("Questions through Params are",this.tryQuestion);*/

    });


this.quizService.fetchSingleQuiz(this.quizName)
.subscribe((res:any)=> {
      console.log(res);
      console.log(res.question);
      this.questions = res.questions;
      this.length = this.questions.length;
      console.log("Questions are",this.questions);
      this.currentQuestion=this.questions[0];
      console.log(this.currentQuestion);
      this.questionName = this.currentQuestion.text;
      this.choice = this.currentQuestion.choices;
      console.log("Current question=",this.currentQuestion);
       this.index = this.questions.indexOf(this.currentQuestion);
    this.quesNumber=this.index+1;
    console.log("Index=",this.index);
    this.isFirst=true;
    this.noOfQues=this.questions.length;
console.log("Number of question in this quiz=",this.noOfQues);
if(this.noOfQues==1)
{
  this.isLast=true;
}
    })
   


  }

  // public nextQUestion()
  // {
  //   this.quizService.quiz.currentQuestion = 
  // }


  getNextQuestion()
  {
    this.isFirst=false;
    console.log("Next question called");
    this.currentQuestion=this.questions[this.index+1];
    this.questionName = this.currentQuestion.text;
    console.log("Changed question=",this.currentQuestion);
    this.index=this.index+1;
    console.log("Changed index=",this.index);
    this.quesNumber=this.index+1;
    this.choice = this.currentQuestion.choices;
    console.log("Changed question number=",this.quesNumber);
    
    if(this.index==(this.noOfQues-1))
    {
      this.isLast=true;
    }
  }

getPreviousQuestion()
  {
    if(this.index==0)
    {
     
    }
    else{
      this.isLast=false;
   console.log("Previous question called");
    this.currentQuestion=this.questions[this.index-1];
    this.questionName = this.currentQuestion.text;
    console.log("Changed question=",this.currentQuestion);
    this.index=this.index-1;
    console.log("Changed index=",this.index);
    this.quesNumber=this.index+1;
    this.choice = this.currentQuestion.choices;
    console.log("Changes question number=",this.quesNumber);
    console.log("Current Question=",this.currentQuestion);
    
    if(this.index==0)
    {
      this.isFirst=true;
    }
    }

  }


  
  calculate(isAnswer: boolean) {

    this.answer[this.index]=isAnswer;
    console.log(this.answer);
  }
  Result(){
    this.answer.forEach(i => {
      if (i == true) {
        this.count++;
      }
    });
    console.log("result", this.count);
    this.router.navigate(["result",{count:this.count,totalQuestion:this.length}]);

}


}
