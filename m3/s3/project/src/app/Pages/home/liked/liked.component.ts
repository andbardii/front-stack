import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from 'src/app/Model/posts';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent {
  likedArr:Posts[] = [];

  constructor(private postSvc:PostsService){}

  ngOnInit() {
    this.getLiked()
  }

  getLiked(){
    this.postSvc.getPost().subscribe(result => {
      this.likedArr = result.filter(post => post.liked == true);
    })
  }

  delete(id?:number){
    this.postSvc.deletePost(id!).subscribe(result => {
      this.likedArr.splice((this.likedArr.findIndex(post => post.id == id)),1)
    })
  }

  like(photo:Posts) {
    this.postSvc.likeThis(photo).subscribe(result => {
      this.getLiked()
    })
  }
}
