import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ActiveComponent } from './Pages/active/active.component';
import { InactiveComponent } from './Pages/inactive/inactive.component';
import { AuthorComponent } from './Pages/author/author.component';
import { NavbarComponent } from './Elements/navbar/navbar.component';
import { FooterComponent } from './Elements/footer/footer.component';
import { MarkDirective } from './Directives/mark.directive';
import { UppercasePipe } from './Pipes/uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiveComponent,
    InactiveComponent,
    AuthorComponent,
    NavbarComponent,
    FooterComponent,
    MarkDirective,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
