import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cphoto } from '../Model/cphoto';

@Injectable({
  providedIn: 'root'
})
export class SphotoService {

  apiUrl:string = "http://localhost:3000/photos"

  constructor(private http:HttpClient) { }

  getPhotos (){
    return this.http.get<Cphoto[]>(this.apiUrl);
  }

  postPhoto (photo:Cphoto){
    return this.http.post<Cphoto>(this.apiUrl,photo);
    //il secondo argomento è l'oggetto che si manda al server per la creazione
  }

  putPhoto (photo:Cphoto){
    return this.http.put<Cphoto>(this.apiUrl + '/' + photo.id, photo);
    //il secondo argomento è l'oggetto che si manda al server per l'aggironamento
  }

  deletePhoto (id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
