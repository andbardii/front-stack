import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser:IUser ={
    email: '',
    followerArr: [],
    followArr: []
  }

  constructor(private usersSvc:UserService){}

  ngOnInit() {
    this.usersSvc.giveCurrentUser();
    this.getCurrentUser()
  }
  getCurrentUser() {
    this.usersSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];

      this.currentUser = res;
    });
  }

}
