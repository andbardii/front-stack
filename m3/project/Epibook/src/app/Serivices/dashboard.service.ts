import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost } from '../Models/dashboard/ipost';
import { UserService } from './user.service';
import { IUser } from '../Models/auth/iuser';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  postApi: string = environment.postsApi;

  constructor(private http: HttpClient, private userSvc: UserService) {}

  create(post: IPost) {
    return this.http.post(this.postApi, post);
  }

  getAll() {
    return this.http.get(this.postApi);
  }
  getAllUsers() {
    return this.http.get(environment.usersApi);
  }

  updatePosts() {
    throw new Error('Method not implemented.');
  }

  like(post: IPost, id: string) {
    return this.http.put(
      'https://epibooksocial-default-rtdb.firebaseio.com/posts/' + id + '.json',
      post
    );
  }

  follow(user: IUser, id: string) {
    return this.http.put(
      'https://epibooksocial-default-rtdb.firebaseio.com/users/' + id + '.json',
      user
    );
  }

  delete(post: IPost, id: string) {
    return this.http.delete(
      'https://epibooksocial-default-rtdb.firebaseio.com/posts/' + id + '.json',
      post
    );
  }
}
