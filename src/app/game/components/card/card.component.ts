import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Card } from '../../models/card';

@Component({
  selector: 'card[cardData]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        'background-image': 'linear-gradient(#e5fdfd, #105db5)',
        transform: 'none'
      })),
      state('stolen', style({
        'background-image': 'linear-gradient(#ecd8d8, #c65d7b)',
        transform: 'none'
      })),
      transition('default => stolen', animate('500ms', style({
          'background-color': 'darkred',
          transform: 'rotateY(360deg)'
        }))
      ),
      transition('stolen => default', animate('500ms', style({
          'background-color': 'darkblue',
          transform: 'rotateY(360deg)'
        }))
      )
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() cardData!: Card;

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardData);
  }

  flipCard(): void {

    console.log('in card.flipCard()');

    if (!this.cardData || !this.cardData.inPlay) {
      return;  
    }

    if (!this.cardData.isStolen) {
      this.cardData.currentState = 'stolen';
    } else {
      this.cardData.currentState = 'default';
    }

    this.cardData.isStolen = !this.cardData.isStolen;

  }

}
