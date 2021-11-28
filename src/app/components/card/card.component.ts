import { Component, Input } from "@angular/core"
import { Card } from "../models";
@Component({
    selector: "app-card",
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    @Input('card')
    public card!:Card;
public visability:string="visible";
    inputHandler() {
console.log("delete")
    }
    
}