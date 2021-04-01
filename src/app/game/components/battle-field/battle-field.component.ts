import { Component } from '@angular/core';
import { Card } from '../../../shared/models/card';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent {

  dummyCards = [
    new Card('ig538394hh', 'Forbidden', 1, 4, 1, 5, 'assets/cards/level-3/g23_forbidden-card.png', true),
    new Card('ser43rewe4', 'Armadodo', 1, 3, 3, 5, 'assets/cards/level-3/g24_armadodo-card.png', true),
    new Card('g46g4b544g', 'Tri-Face', 5, 1, 1, 3, 'assets/cards/level-3/g25_tri-face-card.png', true),
    new Card('g343545g45', 'Fastitocalon', 9, 10, 6, 2, 'assets/cards/level-3/g26_fastitocalon-card.png', true),
    new Card('ser43rewe4', 'Snow Lion', 1, 3, 3, 5, 'assets/cards/level-3/g27_snow-lion-card.png', true),
    new Card('lkji8943ok', 'Ochu', 1, 8, 4, 8, 'assets/cards/level-3/g28_ochu-card.png', true),
    new Card('ky7n66645s', 'SAM08G', 1, 8, 4, 8, 'assets/cards/level-3/g29_sam08g-card.png', true),
    new Card('qwe9jj3fff', 'Death Claw', 1, 8, 4, 8, 'assets/cards/level-3/g30_death-claw-card.png', true),
    new Card('pooiuy7332', 'Cactuar', 1, 8, 4, 8, 'assets/cards/level-3/g31_cactuar-card.png', true)
  ];

}
