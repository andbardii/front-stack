import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './Pages/completed/completed.component';
import { TodoComponent } from './Pages/todo/todo.component';
import { HomeComponent } from './Pages/home/home.component';
import { UncompletedComponent } from './Pages/uncompleted/uncompleted.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  {
    path: 'uncompleted',
    component: UncompletedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
