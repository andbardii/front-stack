import { Component } from '@angular/core';
import { RegisterData } from '../Interfaces/registerdata';
import { AuthService } from '../auth.service';

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

  constructor(private authSvc: AuthService){}

  register(){
    this.authSvc.userRegister(this.data)
    .subscribe(data => {
      console.log("USER REGISTRATO: " + data.user.name)
    })
  }

}
