import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Pages/todo/todo.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { NavbarComponent } from './Elements/navbar/navbar.component';
import { FooterComponent } from './Elements/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { UncompletedComponent } from './Pages/uncompleted/uncompleted.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UncompletedComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
