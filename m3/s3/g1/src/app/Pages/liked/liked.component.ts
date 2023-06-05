import { Component } from '@angular/core';
import { Cphoto } from 'src/app/Model/cphoto';
import { SphotoService } from 'src/app/Services/sphoto.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent {
  likedArr:Cphoto[] = [];

  constructor(private photoSvc:SphotoService){}

  ngOnInit() {
    this.getLiked()
  }

  getLiked(){
    this.photoSvc.getPhotos().subscribe(result => {
      this.likedArr = result.filter(photo => photo.liked == true);
    })
  }

  delete(id?:number){
    this.photoSvc.deletePhoto(id!).subscribe(result => {
      this.getLiked()
    })
  }

  like(photo:Cphoto) {
    this.photoSvc.likeThis(photo).subscribe(result => {
      this.getLiked()
    })
  }
}
