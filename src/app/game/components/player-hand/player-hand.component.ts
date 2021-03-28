import { Component, Input, OnInit } from '@angular/core';

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

  @Input() hand = new Array(5);

  metadata: HandMetadata = {
    hand: this.hand,
    spread: true
  }

  ngOnInit(): void {
  }

}
