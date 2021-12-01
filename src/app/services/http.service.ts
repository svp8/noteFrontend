import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/components/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private loginUrl = "http://localhost:8090/user/login";
  private userid = -8;
  constructor(private http: HttpClient, private auth: AuthService) {

  }
// Все http запросы
  getNotes() {
    this.userid = this.auth.getUser().id;
    return this.http.get('http://localhost:8090/note/all/' + this.userid);
  }
  deleteNotes(id: string | number) {
    return this.http.delete('http://localhost:8090/note/delete/' + id, { responseType: 'text' })
  }
  postNote(header: string, text: string) {
    this.userid = this.auth.getUser().id;

    return this.http.post('http://localhost:8090/note/save/', { header: header, text: text, user_id: this.userid })
  }
}
