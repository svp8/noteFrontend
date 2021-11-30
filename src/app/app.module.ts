import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./components/card/card.component";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { BasicInterceptor } from './services/basic.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BasicInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
 