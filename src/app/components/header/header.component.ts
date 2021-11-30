import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
 public onLogout(){
   this.auth.onLogout();
this.router.navigateByUrl("/login")

 }
}
