import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Csuperhero } from 'src/app/Models/csuperhero';
import { SuperheroService } from 'src/app/Services/superhero.service';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.scss']
})
export class DrivenComponent implements OnInit {

  heroArr: Csuperhero[] = [];
  hero: Csuperhero = new Csuperhero("", "", "","","","",0);

  constructor(private heroSvc:SuperheroService){}

  ngOnInit(): void {
    this.getHero()
  }
  getHero() {
    this.heroSvc.getHero().subscribe(result => {
      this.heroArr = result;
    })
  }
  onSubmit(form:NgForm){
    if(form.valid){
      console.log(form.value)
      this.hero = form.value
      this.heroSvc.addHero(this.hero).subscribe(result => {
        this.getHero()
      })
      form.reset()
    }
  }
}
