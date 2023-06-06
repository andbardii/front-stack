import { Isuperhero } from "../Interfaces/isuperhero";

export class Csuperhero implements Isuperhero{
  name: string;
  alterEgo: string;
  power: string;
  enemy: string;
  planet: string;
  weakness?: string;
  id?: number

  constructor
             (
              name: string,
              alterEgo: string,
              power: string,
              enemy: string,
              planet: string,
              weakness?: string,
              id?:number
             )
             {
                this.name = name;
                this.alterEgo = alterEgo;
                this.power = power;
                this.enemy = enemy;
                this.planet = planet;
                this.weakness = weakness
                this.id = id;
              }
}
