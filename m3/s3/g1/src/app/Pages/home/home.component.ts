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

  constructor(private photoSvc:SphotoService){}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.photoSvc.getPhotos().subscribe(result => {
      this.photoArr = result;
    })
  }


}
