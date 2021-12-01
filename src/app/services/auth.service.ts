import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { User } from '../components/models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = {};
  auth: string = "none";
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser") || '{}'));

  }
  // Возвращает Токен для basic auth
  public getToken() {
    let token = this.currentUserSubject.value.authdata
    console.log("token" + token);
    if (token != null) {
      return token;
    }
    return null;
  }
  // Возвращает текущего пользователя
  public getUser() {
    return this.currentUserSubject.value
  }
  // Проверка входа
  public isLoggedIn(): boolean {
    if (this.currentUserSubject.value.authdata != undefined) {
      return true;
    }
    else return false;
  }
  // Post запрос для входа
  // Возвращает Promise
  // 
  onLogin = (login: string, password: string): Promise<any> => {
    return lastValueFrom(this.http.post("http://localhost:8090/user/login", { login: login, password: password })).then((resp: any) => {
      console.log(resp);
      if (resp != null) {
        this.user = resp;
        // токен вида login:password
        this.user.authdata = window.btoa(login + ':' + password);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser") || '{}'));
      }
    }, (err: any) => {
      console.log("Error with login")
    });




  }
  // выход из аккаунта
  onLogout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.value.authdata = undefined;
    console.log('delete')
  }

}
