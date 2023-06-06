import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './Pages/reactive/reactive.component';
import { DrivenComponent } from './Pages/driven/driven.component';

const routes: Routes = [
  {
    path: '',
    component: DrivenComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
