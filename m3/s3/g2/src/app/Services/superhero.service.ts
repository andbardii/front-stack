import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Csuperhero } from '../Models/csuperhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService{

  apiUrl:string = 'http://localhost:3000/superhero'

  constructor(private http:HttpClient) { }

  getHero(){
    return this.http.get<Csuperhero[]>(this.apiUrl)
  }
  addHero(hero:Csuperhero){
      return this.http.post<Csuperhero>(this.apiUrl,hero)
  }
}
