import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LikedComponent } from './Pages/liked/liked.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'liked',
    component: LikedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
