import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, sequence } from '@angular/animations';

interface CardMetaData {
  imageLoc: string;
  backOfCard: 'assets/cards/card-reversed.png';
  state: 'default' | 'stolen';
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        'background-color': 'darkblue',
        transform: 'none'
      })),
      state('stolen', style({
        'background-color': 'darkred',
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
export class CardComponent {

  metadata: CardMetaData = {
    backOfCard: 'assets/cards/card-reversed.png',
    imageLoc: 'assets/cards/level-6/elvoret/elvoret-edited.png',
    state: 'default'
  };

  flipCard() {
    if (this.metadata.state === "default") {
      this.metadata.state = 'stolen';
    } else {
      this.metadata.state = 'default';
    }
  }

}
