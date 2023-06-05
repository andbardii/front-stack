import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cphoto } from '../Model/cphoto';

@Injectable({
  providedIn: 'root'
})
export class SphotoService {

  apiUrl:string = 'http://localhost:3000/photos'

  constructor(private http:HttpClient) { }

  getPhotos (){
    return this.http.get<Cphoto[]>(this.apiUrl);
  }

  deletePhoto (id:number){
    return this.http.delete(this.apiUrl + '/' + id);
  }

  likeThis (photo:Cphoto){
    photo.liked = !photo.liked
    return this.http.put<Cphoto>(this.apiUrl + '/' + photo.id, photo);
  }
}
