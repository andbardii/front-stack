import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './Pages/active/active.component';
import { HomeComponent } from './Pages/home/home.component';
import { InactiveComponent } from './Pages/inactive/inactive.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent },
  {
   path: 'active',
   component: ActiveComponent },
  {
  path: 'inactive',
  component: InactiveComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
