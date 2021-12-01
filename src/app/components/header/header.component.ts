import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: any;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }
  // Выходим из аккаунта
  public onLogout() {
    this.auth.onLogout();
    this.router.navigateByUrl("/login")

  }
}
