import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userIsLogged:boolean = false;

  ngOnInit() {
    this.checkUser()
  }
  checkUser() {
    if(localStorage.getItem('user') == null){
      return
    }else{
      this.userIsLogged = true;
    }
  }

}
