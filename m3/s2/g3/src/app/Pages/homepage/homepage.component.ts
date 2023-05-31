import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  posts:Post[] = [];
constructor(private PostService: PostService){
  this.posts = PostService.getAllPosts()
}
}
