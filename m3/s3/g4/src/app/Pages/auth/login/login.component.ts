import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginData } from '../Interfaces/logindata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authSvc: AuthService){}


  data:LoginData = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.userLogin(this.data)
    .subscribe(accessData => {
      console.log(`Sei loggato come ${accessData.user.name}`)
    })
  }
}
