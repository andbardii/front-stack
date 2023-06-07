import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from '../completed/completed.component';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
                        { path: 'completed', component: CompletedComponent },
                        { path: 'todo', component: TodoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
