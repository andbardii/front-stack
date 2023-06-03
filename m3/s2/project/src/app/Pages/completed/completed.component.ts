import { Component, OnInit } from '@angular/core';
import { Ctodo } from 'src/app/Models/ctodo';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todosArray:Ctodo[] = [];
  todo:Ctodo = new Ctodo("",false, new Date());
  loading:boolean = true
  constructor(private TodosSvc:TodosService){ }
  ngOnInit(): void {
    this.getTodos();
  }
  getTodos() {
    this.TodosSvc.getTodos().then(response =>{
      this.todosArray = response.filter(todo => todo.completed == true)
      this.loading = false;
    })
  }
  delete(id?:number){
    this.TodosSvc.deleteTodo(id).then(response =>{
    this.getTodos()
    })
  }


}
