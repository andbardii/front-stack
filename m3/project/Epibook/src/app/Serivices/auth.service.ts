import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../Models/auth/ilogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../Models/auth/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  private authSubject = new BehaviorSubject<null | Object>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));

  apiRegister: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  apiLogin: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;

  apiUsers: string = environment.usersApi;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }
  register(user: ILogin) {
    return this.http.post(this.apiRegister, {
      ...user,
      returnSecuretoken: true,
    });
  }
  registerData(user: IUser) {
    return this.http.post(this.apiUsers, user);
  }

  login(user: ILogin) {
    return this.http
      .post(this.apiLogin, { ...user, returnSecuretoken: true })
      .pipe(
        tap((data) => {
          this.authSubject.next(data);
          localStorage.setItem('user', JSON.stringify(data));
        })
      );
  }
  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    console.log('Utente Sloggato');
    this.router.navigate(['/auth']);
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return;
    }
    const user = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.idToken)) {
      return;
    }

    this.router.navigate(['/dashboard']);
    this.authSubject.next(user);
  }
}
