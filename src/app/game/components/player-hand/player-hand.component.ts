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

  @Input() hand!: Card[];

  metadata: HandMetadata = {
    hand: this.hand,
    spread: true
  }

  ngOnInit(): void {
  }

}
