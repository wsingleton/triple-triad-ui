import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  dummyCards = [
    new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true),
    new Card('ig538394hh', 'Funguar', 1, 4, 1, 5, 'assets/cards/level-1/g2_funguar-card.png', true),
    new Card('g343545g45', 'Bite Bug', 9, 10, 6, 2, 'assets/cards/level-1/g3_bite-bug-card.png', true),
    new Card('g46g4b544g', 'Red Bat', 5, 1, 1, 3, 'assets/cards/level-1/g4_red-bat-card.png', true),
    new Card('ser43rewe4', 'Blobra', 1, 3, 3, 5, 'assets/cards/level-1/g5_blobra-card.png', true),
    new Card('lkji8943ok', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-1/g6_gayla-card.png', true),
    new Card('ky7n66645s', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-1/g7_gesper-card.png', true),
    new Card('qwe9jj3fff', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-1/g8_fastitocalon-f-card.png', true),
    new Card('pooiuy7332', 'Quistis', 1, 8, 4, 8, 'assets/cards/level-1/g9_blood-soul-card.png', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
