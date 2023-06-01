export class Post {
  id:number;
  body:string;
  title:string;
  type:string;
  active:boolean;
  author:string;

  constructor(id:number, body:string, title:string, type:string,  active:boolean, author:string) {
    this.id = id;
    this.body = body;
    this.title = title;
    this.type = type;
    this.active = active;
    this.author = author;
  }
}
