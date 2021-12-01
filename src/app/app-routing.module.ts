import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [{ path: 'home',  canActivate: [AuthGuard],
 component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: '',canActivate: [AuthGuard], component: HomeComponent },
{ path: 'create',canActivate: [AuthGuard], component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
