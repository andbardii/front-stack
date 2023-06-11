import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/Model/posts';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  post:Posts = {
    title: '',
    url: '',
    userId: 0,
    id: 0,
    liked: false
  }

  constructor(
    private postSvc:PostsService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(){
    this.toggleSitua()
  }
  toggleSitua(){
    this.route.params
    .subscribe((params:any)=>{

      this.postSvc.getPostById(params.id).subscribe( post => {
          this.post = post
      })
    })
  }
  editPost(){
    this.postSvc.editPost(this.post)
    .subscribe( post => {
      this.router.navigate(['/home'])
    })
  }
}

