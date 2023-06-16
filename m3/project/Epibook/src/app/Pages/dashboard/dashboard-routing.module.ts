import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detial/:id', component: DetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'search', component: SearchComponent },
  { path: 'create', component: CreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
