import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/auth/login/login.component'
import { LoginRoutingModule } from './auth/login/login-routing.module';


const routes: Routes = [{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{path:'',component:LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
