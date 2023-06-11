import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Posts } from 'src/app/Model/posts';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  postArr:Posts[] = [];
  likedArr:Posts[] = [];
  createZone:boolean = false;

  user:User = {
    id: 0,
    email: '',
    name: '',
    surname: ''
  }

  post:Posts = {
    userId: 0,
    id: 0,
    title: '',
    url: '',
    liked: false
  }

  constructor(private postsSvc:PostsService,
              private authSvc:AuthService){}

  ngOnInit() {
    this.getUser()
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
  create(){
    this.post.userId = this.user.id
    this.postsSvc.createPost(this.post).subscribe(result => {
      this.getArr()
      this.post = {
        userId: 0,
        id: 0,
        title: '',
        url: '',
        liked: false
      }
    })
  }

  getUser(){
    const userDataLocal = localStorage.getItem('user')
    if (userDataLocal !== null) {
     const userData = JSON.parse(userDataLocal);

     this.user.id = userData.user.id
     this.user.email = userData.user.email
     this.user.name = userData.user.name
     this.user.surname = userData.user.surname


    }else {console.log('NON DOVRESTI ESSERE QUI')}
   }

}
