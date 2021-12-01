import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { User } from '../models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  auth: string = "none";
  login: string = "";

  password: string = "";
  constructor(private service: AuthService, private router: Router) {

  }
  // Вход из аккаунта при переходе на страницу входа
  ngOnInit(): void {
    this.service.onLogout();
  }

  onLogin = () => {
    // Метод из сервиса для входа, который возвращает promise
    // Ждем входа,затем отправляемся на главную
    this.service.onLogin(this.login, this.password).then((resp) => {

      console.log(this.service.isLoggedIn())
      if (this.service.isLoggedIn()) {
        this.router.navigateByUrl("/home")
      }
      // ошибка входа, появляется текст
      else this.auth = "";
    })

  }
}
