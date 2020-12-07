import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  login(user: string, password: string):any {
    return new Promise(resolve => {
      setTimeout(() => {
        (user === '@admin' && password === '123456')? resolve(true): resolve(false);
      }, 2000);
    });
  }

  auth:boolean=false;
  get_auth():boolean {
    return this.auth;
  }
  set_auth(element) {
    this.auth = element;
  }
}
