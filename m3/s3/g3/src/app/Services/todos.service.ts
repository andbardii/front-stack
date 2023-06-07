import { Injectable } from '@angular/core';
import { Ctodo } from '../Models/ctodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url: string = "http://localhost:3000/todos"
  todosArray:Ctodo[] = []

  constructor() { }

  getTodos():Promise<Ctodo[]>{
    return fetch(this.url).then(response => response.json());
  }

  addTodo(todo:Ctodo):Promise<Ctodo>{
    return fetch(this.url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }

  deleteTodo(id:number = 0){
    return fetch(this.url+'/'+id,{
      method:'DELETE'
    }).then(response => response.json());
  }

  toggleFalseCompleted(id:number = 0) {
    return fetch(this.url+'/'+id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: true })
    }).then((res) => res.json());
  }
  toggleTrueCompleted(id:number = 0) {
    return fetch(this.url+'/'+id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: false })
    }).then((res) => res.json());
  }
}
