import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { NewpageComponent } from './newpage/newpage.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'page', component: NewpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
