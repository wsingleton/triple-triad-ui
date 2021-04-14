import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'card[cardData]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardData!: Card;
  @Input() inPlay: boolean;

  constructor() {
    this.inPlay = false;
  }

}
