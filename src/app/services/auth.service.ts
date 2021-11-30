import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../components/models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = {};
  auth: string = "none";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private service: HttpService) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser") || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public getToken() {
    //  let token:User=localStorage.getItem('currentUser');
    let token = this.currentUserSubject.value.authdata
    console.log("token" + token);
    if (token != null) {
      return token;
    }
    return null;
  }
  onLogin = (login: string, password: string): any => {

    this.service.loginUser(login, password).subscribe((resp: any) => {
      // localStorage.setItem('user', resp.token);
      console.log(resp);
      if (resp != null) {
        this.user = resp;
        this.user.authdata = window.btoa(login + ':' + password);

        localStorage.setItem('currentUser', JSON.stringify(this.user));
        console.log("bro " + localStorage.getItem("currentUser"));
        this.currentUserSubject.next(this.user);
        return this.user;
      }
      else {
        this.auth = ""
        return this.auth
      }

    }

    )


  }
  onLogout(){
    localStorage.removeItem('currentUser');
  }
  //   logout() {
  //     // remove user from local storage to log user out
  //     localStorage.removeItem('currentUser');
  //     this.currentUserSubject.next(null);
  // }
}
