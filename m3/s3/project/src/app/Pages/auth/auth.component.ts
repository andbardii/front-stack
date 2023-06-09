import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private authSvc: AuthService){}

  logout(){
    this.authSvc.userLogout()
  }


}
