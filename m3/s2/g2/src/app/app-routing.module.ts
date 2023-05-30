import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ActiveComponent } from './Pages/active/active.component';
import { InactiveComponent } from './Pages/inactive/inactive.component';

const routes: Routes = [{
  path: 'homepage',
  component: HomepageComponent },
  {
   path: 'active',
   component: ActiveComponent },
  {
  path: 'inactive',
  component: InactiveComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
