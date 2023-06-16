import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/Models/auth/iuser';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { AuthService } from 'src/app/Serivices/auth.service';
import { DashboardService } from 'src/app/Serivices/dashboard.service';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  leftUsersArr: IUser[] = [];
  usersArr: IUser[] = [];
  choosedArr: IUser[] = [];

  choosedUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };
  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };
  generalPostsArr: IPost[] = [];
  profilePosts: IPost[] = [];
  currentId: string = '';
  choosedKeys: string[] = [];
  choosedId: string = '';

  constructor(
    private dashSvc: DashboardService,
    private router: Router,
    private route: ActivatedRoute,
    private userSvc: UserService,
    private authSvc:AuthService
  ) {}

  ngOnInit() {
    this.reload();

  }

  getUserPosts() {
    this.dashSvc.getAll().subscribe((data) => {
      this.generalPostsArr = Object.values(data);
      this.profilePosts = this.generalPostsArr.filter(
        (p) => p.author == this.choosedUser.username
      );
    });
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];
      const id = Object.keys(data)[0];

      this.currentUser = res;
      this.currentId = id;
      console.log('REALOAD CURRENT', this.currentUser)
    });
  }

  follow() {
    const index = this.choosedUser.followerArr.indexOf(this.currentId);
    console.log("INDEX", index, this.currentId);
    console.log("START CURRENT", this.currentUser)
    const followIndex = this.currentUser.followArr.indexOf(this.choosedId);
    console.log("FOLLOWINDEX", followIndex, this.choosedId);
    console.log("START CHOOSED", this.choosedUser)

    if (index > -1) {
      this.choosedUser.followerArr.splice(index, 1);
      this.currentUser.followArr.splice(followIndex, 1);
      console.log("IF CHOOSED", this.choosedId, this.choosedUser)
      console.log("IF CURRENT", this.currentId, this.currentUser)
      this.dashSvc
        .follow(this.choosedUser, this.choosedId)
        .subscribe((data) => {});
      this.dashSvc
        .follow(this.currentUser, this.currentId)
        .subscribe((data) => {this.reload()});
    } else {
      this.choosedUser.followerArr.push(this.currentId);
      this.currentUser.followArr.push(this.choosedId);
      console.log("ELSE CHOOSED", this.choosedId, this.choosedUser)
      console.log("ELSE CURRENT", this.currentId, this.currentUser)
      this.dashSvc
        .follow(this.choosedUser, this.choosedId)
        .subscribe((data) => {});
      this.dashSvc
        .follow(this.currentUser, this.currentId)
        .subscribe((data) => {this.reload()});
    }
  }

  followedBy(): boolean {
    return this.choosedUser.followerArr.includes(this.currentId);
  }

  reload() {
    this.route.params.subscribe((params: any) => {
      this.dashSvc.getAllUsers().subscribe((data) => {
        this.usersArr = Object.values(data);
        this.choosedKeys = Object.keys(data);
        console.log("CHOOSED KEYS: " + this.choosedKeys);
        this.leftUsersArr = Object.values(data);
        this.userSvc.giveCurrentUser();
        this.getCurrentUser();
        this.choosedArr = this.usersArr.filter(
          (user) => user.username == params.id
        );
        this.choosedUser = this.choosedArr[0];
        console.log("CHOOSED USER SOPRA: ", this.choosedUser)
        console.log("USER ARR SOPRA", this.usersArr)
        const indexUser = this.usersArr.findIndex(
          (user) => user == this.choosedUser
        );
        console.log("INDEXUSER", indexUser)
        const key = this.choosedKeys.slice(indexUser, indexUser + 1);
        this.choosedId = key[0];
        console.log(key);

        this.getUserPosts();
        console.log('REALOAD CHOOSED', this.choosedUser)
      });
    });
  }
  logout() {
    this.authSvc.logout();
  }
}
