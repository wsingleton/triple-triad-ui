import { Component } from '@angular/core';
import { Card } from '../../../shared/models/card';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  opponentHand = [
    new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true, true),
    new Card('ig538394hh', 'Funguar', 1, 4, 1, 5, 'assets/cards/level-1/g2_funguar-card.png', true, true),
    new Card('g343545g45', 'Bite Bug', 9, 10, 6, 2, 'assets/cards/level-1/g3_bite-bug-card.png', true, true),
    new Card('g46g4b544g', 'Red Bat', 5, 1, 1, 3, 'assets/cards/level-1/g11_cockatrice-card.png', true, true),
    new Card('ser43rewe4', 'Tonberry', 1, 3, 3, 5, 'assets/cards/level-3/g32_tonberry-card.png', true, true)
  ];

  playerHand = [
    new Card('ig538394hh', 'Grat', 1, 4, 1, 5, 'assets/cards/level-2/g12_grat-card.png', true),
    new Card('ser43rewe4', 'Buel', 1, 3, 3, 5, 'assets/cards/level-2/g13_buel-card.png', true),
    new Card('g46g4b544g', 'Mesmerize', 5, 1, 1, 3, 'assets/cards/level-2/g14_mesmerize-card.png', true),
    new Card('g343545g45', 'Glacial Eye', 9, 10, 6, 2, 'assets/cards/level-2/g15_glacial-eye-card.png', true),
    new Card('pooiuy7332', 'Abyss Worm', 1, 8, 4, 8, 'assets/cards/level-3/g33_abyss-worm-card.png', true)
    
  ];

}
