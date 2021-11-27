import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path: 'cards', component: CardComponent },
{ path: 'auth', component: LoginComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
