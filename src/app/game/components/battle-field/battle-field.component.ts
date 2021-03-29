import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  dummyCards = [
    new Card('jshhe93rhi', 'Quistis', 9, 10, 6, 2, 'assets/cards/level-10/quistis-card.png', true),
    new Card('ig538394hh', 'Geezard', 1, 4, 1, 5, 'assets/cards/level-1/geezard-card.png', true),
    new Card('g343545g45', 'Quistis', 9, 10, 6, 2, 'assets/cards/level-10/quistis-card.png', true),
    new Card('g46g4b544g', 'Funguar', 5, 1, 1, 3, 'assets/cards/level-1/funguar-card.png', true),
    new Card('ser43rewe4', 'Bite Bug', 1, 3, 3, 5, 'assets/cards/level-1/bite-bug-card.png', true),
    new Card('lkji8943ok', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-6/oilboyle-card.png', true),
    new Card('ky7n66645s', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-6/oilboyle-card.png', true),
    new Card('qwe9jj3fff', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-6/oilboyle-card.png', true),
    new Card('pooiuy7332', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-6/oilboyle-card.png', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
