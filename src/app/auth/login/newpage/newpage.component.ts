import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})
export class NewpageComponent implements OnInit {

  constructor(private service:ServicesService,
    private _router: Router,) { }

  ngOnInit(): void {
    let test=this.service.get_auth();
    if(test===false){
      this._router.navigateByUrl("/");      
    }
  }

  logout(){
    this.service.set_auth('false');
      this._router.navigateByUrl("/");      
  }

}
