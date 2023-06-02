import { TodosService } from 'src/app/Services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Ctodo } from 'src/app/Models/ctodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todosArray:Ctodo[] = [];
  todo:Ctodo = new Ctodo("",false);
  loading:boolean = true
  innerText:string = ""

  constructor(private TodosSvc:TodosService){}

  ngOnInit(){
    this.getTodos();
  }
  getTodos(){
    this.TodosSvc.getTodos().then(response =>{
    this.todosArray = response;
    this.loading = false;
    })
  }
  delete(id?:number){
    this.TodosSvc.deleteTodo(id).then(response =>{
    this.getTodos()
    })
  }
  create(){
    this.TodosSvc.addTodo(this.todo).then(res => this.getTodos());
    this.innerText = "";
  }
  complete(id?:number){
    this.TodosSvc.toggleCompleted(id).then(response => this.getTodos())
  }

}

