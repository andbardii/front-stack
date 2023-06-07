import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
                        { path: '', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
                        { path: 'completed', loadChildren: () => import('./Pages/completed/completed.module').then(m => m.CompletedModule) },
                        { path: 'todo', loadChildren: () => import('./Pages/todo/todo.module').then(m => m.TodoModule) }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
