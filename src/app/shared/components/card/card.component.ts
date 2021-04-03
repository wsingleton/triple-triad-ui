import { Component, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Card } from '../../models/card';


@Component({
  selector: 'card[cardData]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('default => stolen', animate('500ms', style({
        'transform': 'rotateY(360deg)'
      }))),
      transition('stolen => default', animate('500ms', style({
        'transform': 'rotateY(360deg)'
      })))
    ])
  ]
})
export class CardComponent {

  @Input() cardData: Card | null;

  constructor() {
    this.cardData = null;
  }

  flipCard(): void {

    if (!this.cardData || !this.cardData.inPlay) {
      return;  
    }

    this.cardData.isStolen = !this.cardData.isStolen;

  }

  selectCard(): void {

    if (!this.cardData || this.cardData.inPlay) {
      return;
    }

    this.cardData.isSelected = !this.cardData.isSelected;
    
  }

}
