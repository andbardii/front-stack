import { DashboardService } from './../../../Serivices/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { AuthService } from 'src/app/Serivices/auth.service';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  editZone: boolean = false;

  currentId: string = '';
  generalPostsArr: IPost[] = [];
  profilePosts: IPost[] = [];

  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };
  usersArr:IUser[] = [];

  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private dashSvc: DashboardService
  ) {}

  ngOnInit() {
    this.userSvc.giveCurrentUser();
    this.getCurrentUser();
    this.getProfilePosts();
    this.dashSvc.getAllUsers().subscribe((data) => {
      this.usersArr = Object.values(data);
    })
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];
      const id = Object.keys(data)[0];

      this.currentUser = res;
      this.currentId = id;
    });
  }

  edit() {
    this.userSvc
      .editUser(this.currentUser, this.currentId)
      .subscribe((data) => {
        this.getCurrentUser();
        this.editZone = false;
      });
    // this.dashSvc.updatePosts().subscribe((data) => {
    //   this.getProfilePosts()
    // })
  }

  getProfilePosts() {
    this.dashSvc.getAll().subscribe((data) => {
      this.generalPostsArr = Object.values(data);
      console.log(this.generalPostsArr);
      this.profilePosts = this.generalPostsArr.filter(
        (p) => p.userId == this.currentId
      );
    });
  }

  logout() {
    this.authSvc.logout();
  }

}
