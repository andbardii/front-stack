import { Component, OnInit } from '@angular/core';
import { Cphoto } from 'src/app/Model/cphoto';
import { SphotoService } from 'src/app/Services/sphoto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photoArr:Cphoto[] = [];
  likedArr:Cphoto[] = [];

  constructor(private photoSvc:SphotoService){}

  ngOnInit() {
    this.getArr();
    this.getLiked()
  }
  getArr(){
    this.photoSvc.getPhotos().subscribe(result => {
      this.photoArr = result;
    })
  }
  getLiked(){
    this.photoSvc.getPhotos().subscribe(result => {
      this.likedArr = result.filter(photo => photo.liked == true);
    })
  }

  delete(id?:number){
    this.photoSvc.deletePhoto(id!).subscribe(result => {
      this.getArr()
    })
  }

  like(photo:Cphoto) {
    this.photoSvc.likeThis(photo).subscribe(result => {
      this.getArr()
      this.getLiked()
    })
  }

}
