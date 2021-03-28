import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  dummyCards = [
    new Card('jshhe93rhi', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('ig538394hh', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('g343545g45', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('g46g4b544g', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('ser43rewe4', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('lkji8943ok', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('ky7n66645s', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('qwe9jj3fff', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true),
    new Card('pooiuy7332', 'Elvoret', 7, 4, 8, 3, 'assets/cards/level-6/elvoret/elvoret-edited.png', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
