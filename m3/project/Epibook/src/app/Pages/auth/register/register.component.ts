import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Models/auth/ilogin';
import { IUser } from 'src/app/Models/auth/iuser';
import { AuthService } from 'src/app/Serivices/auth.service';
import { DashboardService } from 'src/app/Serivices/dashboard.service';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: ILogin = {
    email: '',
    password: '',
  };

  newUser: IUser = {
    username: '@username',
    email: '',
    profilePic:
      'https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png',
    description: 'Description',
    followerArr: ['-NY1yKfsgmYX8PG1nIiO'],
    followArr: ['-NY1yKfsgmYX8PG1nIiO'],
  };

  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };

  currentId: string = '';
  usersArr: IUser[] = [];
  epiArr: IUser[] = [];
  epiUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private dashSvc: DashboardService,
    private userSvc: UserService
  ) {}

  register() {
    this.newUser.email = this.user.email;
    this.authSvc.register(this.user).subscribe((data) => {
      console.log(data);
    });
    this.authSvc.registerData(this.newUser).subscribe((data) => {
      console.log('Utente registrato nel Database');
      this.userSvc.currentEmail = this.newUser.email;
      this.getCurrentUser();
    });
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];
      const id = Object.keys(data)[0];

      this.currentUser = res;
      this.currentId = id;
      console.log('CURRENT USER-ID 78/79');
      console.log(this.currentUser);
      console.log(this.currentId);


      this.getEpibook();
    });
  }

  getEpibook() {
    this.dashSvc.getAllUsers().subscribe((data) => {
      this.usersArr = Object.values(data);
      this.epiArr = this.usersArr.filter(
        (u) => u.email == "epibook@epibook.com"
      );
      this.epiUser = this.epiArr[0];
      this.epiUser.followerArr.push(this.currentId);
      this.epiUser.followArr.push(this.currentId);

      console.log('EPI USER 98');

      console.log(this.epiUser)

      this.toggleFollow();
    });
  }

  toggleFollow() {
    console.log('EPI USER 108');


    console.log(this.epiUser)
    this.dashSvc.follow(this.epiUser, '-NY1yKfsgmYX8PG1nIiO')
      .subscribe((data) => {
        this.router.navigate(['/auth', 'login']);

      });
  }
}
