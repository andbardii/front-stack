import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent {
  posts:Post[] = [];

  constructor(private TodosService: TodosService){
    this.posts = TodosService.getAllPosts().filter(post => post.active === false)
  }
  switchPost(post: Post): void {
    this.TodosService.switchPost(post);
    this.posts = this.TodosService.getAllPosts().filter(post => post.active === false)
  }
}
