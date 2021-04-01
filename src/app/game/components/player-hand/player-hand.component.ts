import { Component, Input } from '@angular/core';
import { Card } from '../../../shared/models/card';

interface HandMetadata {
  hand: Object[];
  spread: boolean;
}

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent {

  @Input() hand!: Card[];

  metadata!: HandMetadata;

  ngOnInit(): void {
    this.metadata = {
      hand: this.hand,
      spread: true
    }
  }

}
