import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';
const key:string = "todos"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  
})
export class TodoComponent implements OnInit {

  todos : Array<Todo> = []
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos =  this.todoService.fetchTodos();
    // this.todos = this.todoService.todos
  }

  addTodo(todo: string){
    this.todos = this.todoService.addTodo(todo);
    // this.todoService.todos.push({text: todo})
    // this.todos = this.todoService.todos
  }

  deleteTodo(index: number){
    console.log(index);
    this.todoService.todos.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(this.todos))
    this.todos = this.todoService.todos
  }

}