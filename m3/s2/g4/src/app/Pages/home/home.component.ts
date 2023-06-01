import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts:Post[] = [];
  constructor(private TodosService: TodosService){
    this.posts = TodosService.getAllPosts()
  }

  switchPost(post: Post): void {
    this.TodosService.switchPost(post);
  }
}
