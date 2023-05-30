import { PostService } from 'src/app/post.service';
import { Component } from '@angular/core';
import { Post } from 'src/app/Model/post';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent {
posts:Post[] = [];
constructor(PostService: PostService){
PostService.getAllPosts().then((post) => (this.posts = post.filter(post => post.active === false)));
}
}
