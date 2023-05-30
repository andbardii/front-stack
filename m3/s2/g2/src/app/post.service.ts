import { Injectable } from '@angular/core';
import { Post } from './Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }
  getAllPosts():Promise<Post[]> {
    return fetch("assets/db.json").then(res => res.json())
}
}

