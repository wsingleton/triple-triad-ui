import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  dummyCards = [
    new Card('ig538394hh', 'Grat', 1, 4, 1, 5, 'assets/cards/level-2/g12_grat-card.png', true),
    new Card('ser43rewe4', 'Buel', 1, 3, 3, 5, 'assets/cards/level-2/g13_buel-card.png', true),
    new Card('g46g4b544g', 'Mesmerize', 5, 1, 1, 3, 'assets/cards/level-2/g14_mesmerize-card.png', true),
    new Card('g343545g45', 'Glacial Eye', 9, 10, 6, 2, 'assets/cards/level-2/g15_glacial-eye-card.png', true),
    new Card('ser43rewe4', 'Belhelmel', 1, 3, 3, 5, 'assets/cards/level-2/g16_belhelmel-card.png', true),
    new Card('lkji8943ok', 'Thrustaevis', 1, 8, 4, 8, 'assets/cards/level-2/g17_thrustaevis-card.png', true),
    new Card('ky7n66645s', 'Anacondaur', 1, 8, 4, 8, 'assets/cards/level-2/g18_anacondaur-card.png', true),
    new Card('qwe9jj3fff', 'Creeps', 1, 8, 4, 8, 'assets/cards/level-2/g19_creeps-card.png', true),
    new Card('pooiuy7332', 'Grendel', 1, 8, 4, 8, 'assets/cards/level-2/g20_grendel-card.png', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
