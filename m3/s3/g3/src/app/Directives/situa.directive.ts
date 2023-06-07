import { Directive, ElementRef, OnInit } from '@angular/core';
import { TodosService } from '../Services/todos.service';
import { Ctodo } from '../Models/ctodo';

@Directive({
  selector: '[appSitua]'
})
export class SituaDirective implements OnInit{

  todosArray:Ctodo[] = [];
  todosCompletedArray:Ctodo[] = [];
  todosUncompletedArray:Ctodo[] = [];


  constructor(private ref:ElementRef, private TodosSvc:TodosService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.TodosSvc.getTodos().then(response =>{
      this.todosArray = response;
      this.todosCompletedArray = response.filter(todo => todo.completed == true);
      this.todosUncompletedArray = response.filter(todo => todo.completed == false);
      this.updateBar()
    })
  }
  updateBar() {
    const todos = this.todosArray.length;
    const todosCompleted = this.todosCompletedArray.length;
    const percentuale = (todosCompleted / todos) * 100;
    this.ref.nativeElement.style.width = `${percentuale}%`
  }

}

