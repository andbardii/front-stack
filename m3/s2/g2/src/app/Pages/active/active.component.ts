import { Component } from '@angular/core';
import { Post } from "../../Model/post";
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {
  posts:Post[] = [];

  constructor(private PostService: PostService){
    PostService.getAllPosts().then((post) => (this.posts = post.filter(post => post.active === true)));
  }
}
