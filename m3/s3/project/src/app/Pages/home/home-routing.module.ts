import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CompletedComponent } from '../completed/completed.component';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
                        { path: '', component: HomeComponent },
                        { path: 'completed', component: CompletedComponent },
                        { path: 'todo', component: TodoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
