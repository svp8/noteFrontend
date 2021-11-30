import { Component, Input } from "@angular/core"

import { HttpService } from "src/app/services/http.service";
import { Card } from "../models";
@Component({
    selector: "app-card",
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    @Input('card')
    public card!: Card;
    public deleted: string = "";
    constructor(private http: HttpService) { }
    inputHandler() {
        console.log(this.card.header)

        this.http.deleteNotes(this.card.note_id).subscribe((resp: any) => {
            if(resp!=null){
              console.log(resp);
              this.deleted="none"
            }
            });
    }

}