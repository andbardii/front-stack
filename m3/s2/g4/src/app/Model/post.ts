export class Post {
    id:number;
    body:string;
    title:string;
    type:string;
    active:boolean;

    constructor(id:number, body:string, title:string, type:string,  active:boolean) {
      this.id = id;
      this.body = body;
      this.title = title;
      this.type = type;
      this.active = active;
    }
}
