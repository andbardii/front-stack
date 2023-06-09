import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from 'src/app/Model/posts';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = environment.apiUrl + '/posts';

  constructor(private http:HttpClient) { }

  getPost (){
    return this.http.get<Posts[]>(this.apiUrl);
  }

  deletePost (id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }

  likeThis (post:Posts){
    post.liked = !post.liked
    return this.http.put<Posts>(this.apiUrl + '/' + post.id, post);
  }
}
