import { Component, Input } from '@angular/core';
import { Card } from '../../../shared/models/card';

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent {

  @Input() hand!: Card[];

}
