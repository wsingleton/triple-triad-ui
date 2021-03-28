import { Component, OnInit } from '@angular/core';

interface HandMetadata {
  spread: boolean;
}

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  metadata: HandMetadata = {
    spread: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
