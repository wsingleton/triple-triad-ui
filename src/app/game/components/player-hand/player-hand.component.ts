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
    new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true),
    new Card('ig538394hh', 'Funguar', 1, 4, 1, 5, 'assets/cards/level-1/g2_funguar-card.png', true),
    new Card('g343545g45', 'Bite Bug', 9, 10, 6, 2, 'assets/cards/level-1/g3_bite-bug-card.png', true),
    new Card('g46g4b544g', 'Cockatrice', 5, 1, 1, 3, 'assets/cards/level-1/g11_cockatrice-card.png', true),
    new Card('ser43rewe4', 'Caterchipillar', 1, 3, 3, 5, 'assets/cards/level-1/g10_caterchipillar-card.png', true),
  ];

  metadata: HandMetadata = {
    hand: this.hand,
    spread: true
  }

  ngOnInit(): void {
  }

}
