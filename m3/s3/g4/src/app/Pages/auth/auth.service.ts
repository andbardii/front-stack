import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AccessData } from './Interfaces/accessdata';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterData } from './Interfaces/registerdata';

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
    private router: Router) { }

    signUp(data:RegisterData){
      return this.http.post<AccessData>(this.apiUrl + '/register', data);
    }
}
