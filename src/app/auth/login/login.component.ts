import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalFormComponent } from './modal-form/modal-form.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '35vw',
      data: {name: 'hola'}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
