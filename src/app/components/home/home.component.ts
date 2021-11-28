import { Component, OnInit } from '@angular/core';
import {Card} from "src/app/components/models"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public cards:Array<Card>=[{"header":"aaa2","text":"fdf","date":"12/33/22"},
{"header":"aaa3","text":"fdf","date":"12/33/22"},
{"header":"aaa4","text":"fdf","date":"12/33/22"},];

  constructor() { }

  ngOnInit(): void {

  }

}
