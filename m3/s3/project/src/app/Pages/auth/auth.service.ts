import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AccessData } from 'src/app/Model/accessdata';
import { LoginData } from 'src/app/Model/logindata';
import { RegisterData } from 'src/app/Model/registerdata';
import { User } from 'src/app/Model/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;
  private authSubject = new BehaviorSubject<null | AccessData>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)));
  authLogoutTimer:any;

  constructor(
    private http: HttpClient,
    private router: Router) {

      this.restoreUser();

    }

    userRegister(data:RegisterData){
      return this.http.post<AccessData>(this.apiUrl + '/register', data);
    }

    userLogin(data:LoginData){
      return this.http.post<AccessData>(this.apiUrl + '/login', data)
      .pipe(tap(data =>{
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data))

        const expDate = this.jwtHelper
        .getTokenExpirationDate(data.accessToken) as Date;

        this.autoLogout(expDate)
      }),
      )
    }

    userLogout(){
      this.authSubject.next(null);
      console.log("Log Out di: " + (localStorage.getItem('user')))
      localStorage.removeItem('user');
      this.router.navigate(['/auth','login']);

      if(this.authLogoutTimer){
        clearTimeout(this.authLogoutTimer);
      }
    }
    autoLogout(expDate:Date){
      const expMs = expDate.getTime() - new Date().getTime();
      this.authLogoutTimer = setTimeout(()=>{
        this.userLogout();
      }, expMs)
    }

    restoreUser(){
      const userJson = localStorage.getItem('user');

      if(!userJson){
        return
      }
      const user:AccessData = JSON.parse(userJson)

      if(this.jwtHelper.isTokenExpired(user.accessToken)){
        return;
      }

      this.authSubject.next(user);
    }
}
