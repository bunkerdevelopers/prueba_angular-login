import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  constructor(private service:ServicesService,
    private fb: FormBuilder,
    private _router: Router,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalFormComponent>,) {
      this.form = this.fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      });
     }

  form: FormGroup;
  hide = true;
  flagButton=false;

  ngOnInit(): void {
  }

  async login(){
    this.flagButton=true;
    if(this.form.valid===false){
      this.openSnackBar('Por favor llenar formulario');
      this.flagButton=false;
      return false;
    }
    let auth=false;
   auth= await this.service.login(this.form.get('user').value, this.form.get('password').value);
    if(auth===true){
      this.dialogRef.close('true');
      this.service.set_auth(true);
      this._router.navigateByUrl("/page");      
    }else{
      this.flagButton=false;
      console.log('probando else')
      this.openSnackBar('Error en datos');
    }
    
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2500,
    });
  }

  invalidInput(name:string):boolean {
    return this.form.get(name).invalid && this.form.get(name).touched;
  }
}
