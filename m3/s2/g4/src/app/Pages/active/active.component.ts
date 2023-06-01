import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {
  posts:Post[] = [];

  constructor(private TodosService: TodosService){
    this.posts = TodosService.getAllPosts().filter(post => post.active === true)
  }
  switchPost(post: Post): void {
    this.TodosService.switchPost(post);
    this.posts = this.TodosService.getAllPosts().filter(post => post.active === true)
  }
}
