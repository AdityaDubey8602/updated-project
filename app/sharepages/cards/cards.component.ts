import { Component } from '@angular/core';
import { CardServiceService } from 'src/app/services/card-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
    
    cardData:any;

    constructor(private service: CardServiceService){
      this.cardData = this.service.cardDetails;
    }

}
