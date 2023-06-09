import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:User = {
    id: 0,
    email: '',
    name: '',
    surname: ''
  }

  constructor(private authSvc: AuthService){}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    const userDataLocal = localStorage.getItem('user')
    if (userDataLocal !== null) {
     const userData = JSON.parse(userDataLocal);

     this.user.id = userData.user.id
     this.user.email = userData.user.email
     this.user.name = userData.user.name
     this.user.surname = userData.user.surname


    }else {console.log('NON DOVRESTI ESSERE QUI')}
   }

   logout(){
     this.authSvc.userLogout()
   }
}
