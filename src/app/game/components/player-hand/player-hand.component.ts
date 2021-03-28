import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card';

interface HandMetadata {
  hand: Object[];
  spread: boolean;
}

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  @Input() hand = [
    new Card('jshhe93rhi', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png'),
    new Card('ig538394hh', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png'),
    new Card('g343545g45', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png'),
    new Card('g46g4b544g', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png'),
    new Card('ser43rewe4', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png')
  ];

  metadata: HandMetadata = {
    hand: this.hand,
    spread: true
  }

  ngOnInit(): void {
  }

}
