import { IPost } from 'src/app/Models/dashboard/ipost';
import { DashboardService } from './../../../Serivices/dashboard.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/auth/iuser';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  currentId: string = '';

  newPost: IPost = {
    userId: '',
    body: '',
    category: '',
    likes: [],
    comments: [],
    author: '',
    authorProPic: '',
    image: '',
  };

  currentUser: IUser = {
    username: '',
    email: '',
    profilePic: '',
    description: '',
    followerArr: [],
    followArr: [],
  };

  constructor(
    private dashSvc: DashboardService,
    private router: Router,
    private userSvc: UserService
  ) {}

  ngOnInit() {
    this.userSvc.giveCurrentUser();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const res = Object.values(data)[0];
      const id = Object.keys(data)[0];

      this.currentUser = res;
      this.currentId = id;
    });
  }

  create() {
    this.newPost.userId = this.currentId;
    this.newPost.author = this.currentUser.username;
    this.newPost.authorProPic = this.currentUser.profilePic;
    this.newPost.likes.push(this.currentId);
    this.dashSvc.create(this.newPost).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
