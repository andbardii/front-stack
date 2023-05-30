import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {

    handlePosts()

   }
}

const handlePosts = () => {

  class Post {
    id:number;
    body:string;
    title:string;
    active:boolean;

    constructor(id:number, body:string, title:string, active:boolean) {
      this.id = id;
      this.body = body;
      this.title = title;
      this.active = active;
    }

  }

  fetch("../assets/db.json")
  .then((res) => {
    if(res.ok){
      return res.json();
    }else{
      throw new Error ("ERRORE NELLA FETCH (1)")
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) =>{
    console.log(err)
  })

}
