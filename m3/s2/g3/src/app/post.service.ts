import { Injectable } from '@angular/core';
import { Post } from './Model/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:Post[] =[
    {
      "id": 1,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO UNO",
      "type": "politic",
      "active": true
    },
    {
      "id": 2,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO DUE",
      "type": "news",
      "active": true
    },
    {
      "id": 3,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO TRE",
      "type": "politic",
      "active": true
    },
    {
      "id": 4,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO QUATTRO",
      "type": "education",
      "active": false
    },
    {
      "id": 5,
      "body": "Lorem ipsum dolor sit amet, consectetur adip, lorem pili dolor let amet et, consectetur sopa.",
      "title": "POST NUMERO CINQUE",
      "type": "news",
      "active": false
    }
  ]
  getAllPosts():Post[] {
    return this.posts
  }

}


