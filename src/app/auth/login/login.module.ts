import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { NewpageComponent } from './newpage/newpage.component';



@NgModule({
  declarations: [LoginComponent, ModalFormComponent, NewpageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule, 
    MaterialModule
  ]
})
export class LoginModule { }
