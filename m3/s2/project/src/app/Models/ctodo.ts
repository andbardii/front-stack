import { Itodo } from "../Interfaces/itodo";
export class Ctodo implements Itodo {
  id?: number;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean, id?: number){
    this.id = id;
    this.title = title
    this.completed = completed
  }
}
