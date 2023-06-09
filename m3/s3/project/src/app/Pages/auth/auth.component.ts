import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from 'src/app/Model/user';
import { Observable, map, take } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  user: User ={
    id: 0,
    email: '',
    name: '',
    surname: ''
  }
  constructor(private authSvc: AuthService){}

 logged:Observable<boolean> =
 this.authSvc.isLoggedIn$.pipe(take(1),map(isLoggedIn =>{
    if(isLoggedIn){
      return true;
    }
      return false;
  }))
}
