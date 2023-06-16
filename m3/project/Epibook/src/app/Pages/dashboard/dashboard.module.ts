import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    DetailComponent,
    AccountComponent,
    SearchComponent,
    ExploreComponent,
    NavbarComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ],
})
export class DashboardModule {}
