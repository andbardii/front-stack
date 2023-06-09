import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Posts } from 'src/app/Model/posts';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  postArr:Posts[] = [];
  likedArr:Posts[] = [];

  constructor(private postsSvc:PostsService){}

  ngOnInit() {
    this.getArr();
    this.getLiked()
  }
  getArr(){
    this.postsSvc.getPost().subscribe(result => {
      this.postArr = result;
    })
  }
  getLiked(){
    this.postsSvc.getPost().subscribe(result => {
      this.likedArr = result.filter(post => post.liked == true);
    })
  }

  delete(id?:number){
    this.postsSvc.deletePost(id!).subscribe(result => {
      this.getArr()
    })
  }

  like(post:Posts) {
    this.postsSvc.likeThis(post).subscribe(result => {
      this.getArr()
      this.getLiked()
    })
  }

}
