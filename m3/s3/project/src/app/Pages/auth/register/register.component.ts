import { Component } from '@angular/core';
import { RegisterData } from 'src/app/Model/registerdata';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  data:RegisterData ={
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  constructor(private authSvc: AuthService,
              private router:Router){}

  register(){
    this.authSvc.userRegister(this.data)
    .subscribe(data => {
      console.log("USER REGISTRATO: " + data.user.name)
      this.router.navigate(['/dashboard']);
    })
  }
}
