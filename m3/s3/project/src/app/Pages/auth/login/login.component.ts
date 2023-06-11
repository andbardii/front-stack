import { Component } from '@angular/core';
import { LoginData } from 'src/app/Model/logindata';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authSvc: AuthService,
              private router: Router){}

  data:LoginData = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.userLogin(this.data)
    .subscribe(accessData => {
      console.log(`Sei loggato come ${accessData.user.name}`)
      this.router.navigate(['/dashboard']);
    })
  }
}
