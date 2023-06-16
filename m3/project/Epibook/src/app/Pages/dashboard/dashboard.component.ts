import { Component } from '@angular/core';
import { IUser } from 'src/app/Models/auth/iuser';
import { IPost } from 'src/app/Models/dashboard/ipost';
import { AuthService } from 'src/app/Serivices/auth.service';
import { DashboardService } from 'src/app/Serivices/dashboard.service';
import { UserService } from 'src/app/Serivices/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  postsArr: IPost[] = [];
  postKeysArr: string[] = [];

  usersArr:IUser[] = [];

  currentId: string = '';

  constructor(
    private dashboardSvc: DashboardService,
    private userSvc: UserService,
    private authSvc: AuthService
  ) {}

  getAll() {
    this.dashboardSvc.getAll().subscribe((data) => {
      this.postsArr = Object.values(data);
      this.postKeysArr = Object.keys(data);
      console.log(this.postsArr);
    });
  }

  ngOnInit() {
    this.getAll();
    this.userSvc.giveCurrentUser();
    this.getCurrentUser();
    this.dashboardSvc.getAllUsers().subscribe((data) => {
      this.usersArr = Object.values(data);
    })
  }

  getCurrentUser() {
    this.userSvc.getCurrent().subscribe((data) => {
      const id = Object.keys(data)[0];

      this.currentId = id;
    });
  }

  toggleLike(post: IPost) {
    const index = post.likes.indexOf(this.currentId);
    const indexPost = this.postsArr.findIndex((p) => p == post);
    const key = this.postKeysArr.slice(indexPost, indexPost + 1);
    console.log(key[0]);
    if (index > -1) {
      post.likes.splice(index, 1);
      this.dashboardSvc.like(post, key[0]).subscribe((data: any) => {
        this.getAll();
      });
    } else {
      post.likes.push(this.currentId);
      this.dashboardSvc.like(post, key[0]).subscribe((data: any) => {
        this.getAll();
      });
    }
  }

  likedBy(post: IPost): boolean {
    return post.likes.includes(this.currentId);
  }

  delete(post: IPost) {
    const indexPost = this.postsArr.findIndex((p) => p == post);
    const key = this.postKeysArr.slice(indexPost, indexPost + 1);
    this.dashboardSvc.delete(post, key[0]).subscribe((data) => this.getAll());
  }
  logout(){
    this.authSvc.logout()
  }
}
