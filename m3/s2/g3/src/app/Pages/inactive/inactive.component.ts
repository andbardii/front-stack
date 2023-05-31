import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent {
  posts:Post[] = [];
  constructor(private PostService: PostService){
    this.posts = PostService.getAllPosts().filter(post => post.active === false)
}
}
