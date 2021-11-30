import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/components/models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
// private headers:HttpHeaders={""};
  private loginUrl = "http://localhost:8090/user/login";
  constructor(private http: HttpClient) {

  }
  // public loginUser(user:User):Observable<any>{
  //   return this.http.post<any>(this.loginUrl,user);
  // }
  loginUser(login: string, password: string) {
    console.log(login, password);

   return this.http.post(this.loginUrl, { login: login, password: password })
     

    
  }
getNotes(){
  return this.http.get('http://localhost:8090/note/all/1');
}
deleteNotes(id: string | number){
  return this.http.delete('http://localhost:8090/note/delete/'+id, {responseType: 'text'})
}
}
