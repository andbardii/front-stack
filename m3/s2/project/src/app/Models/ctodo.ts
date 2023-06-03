import { Itodo } from "../Interfaces/itodo";
export class Ctodo implements Itodo {
  id?: number;
  title: string;
  completed: boolean;
  date:Date;

  constructor(title: string, completed: boolean, date:Date, id?: number){
    this.title = title;
    this.completed = completed;
    this.date = date;
    this.id = id;
  }
}
