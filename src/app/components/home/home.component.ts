import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from "src/app/components/models"
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  public cards: Array<Card> = [];
  searchText: string = "";
  constructor(private http: HttpService, private router: Router) { }
// При переходе на страницу загружаются заметки
  ngOnInit(): void {
    this.http.getNotes().subscribe((resp: any) => {
      if (resp != null) {
        this.cards = resp;
        console.log(this.cards);
      }
    });
  }
  // Переход на страницу создания
  onCreate() {
    this.router.navigateByUrl("/create");
  }

}
