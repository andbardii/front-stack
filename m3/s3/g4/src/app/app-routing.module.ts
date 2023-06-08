import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./Pages/auth/auth/auth.module').then(m => m.AuthModule) }, { path: 'login', loadChildren: () => import('./Pages/auth/login/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./Pages/auth/register/register/register.module').then(m => m.RegisterModule) }, { path: 'home', loadChildren: () => import('./Pages/home/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
