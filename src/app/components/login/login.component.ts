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
  

  ngOnInit(): void {

  }

  onLogin = () => {
    let answer=this.service.onLogin(this.login,this.password)
    if (answer!="" &&answer!=null){
      this.router.navigateByUrl("/home")
    }
    else this.auth="";
  }
}
