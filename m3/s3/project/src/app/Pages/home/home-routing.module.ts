import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LikedComponent } from './liked/liked.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'liked', component:LikedComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
