import { Injectable } from '@angular/core';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  posts:Post[] =[
    {
      "id": 1,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO UNO",
      "type": "politic",
      "active": true,
      "author": "Antonio Valeri"
    },
    {
      "id": 2,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO DUE",
      "type": "news",
      "active": true,
      "author": "Alessia Calanchi"
    },
    {
      "id": 3,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO TRE",
      "type": "politic",
      "active": true,
      "author": "Luigi Ferdinando"
    },
    {
      "id": 4,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO QUATTRO",
      "type": "education",
      "active": false,
      "author": "Maria Bianchi"
    },
    {
      "id": 5,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO CINQUE",
      "type": "news",
      "active": false,
      "author": "Mario Rossi"
    }
  ]
  getAllPosts():Post[] {
    return this.posts
  }
  switchPost(post:Post):void {
    post.active = !post.active;

    let index = this.posts.findIndex(p => p.id == post.id);
    this.posts.splice(index,1,post);
  }
}
