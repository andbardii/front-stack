import { Component, OnInit } from '@angular/core';
import { Ctodo } from 'src/app/Models/ctodo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todosArray:Ctodo[] = [];
  todosCompletedArray:Ctodo[] = [];
  todosUncompletedArray:Ctodo[] = [];
  loading:boolean = true

  constructor(private TodosSvc: TodosService){}

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.TodosSvc.getTodos().then(response =>{
      this.todosArray = response;
      this.todosCompletedArray = response.filter(todo => todo.completed == true);
      this.todosUncompletedArray = response.filter(todo => todo.completed == false);
      this.loading = false;
  })
  }

}
