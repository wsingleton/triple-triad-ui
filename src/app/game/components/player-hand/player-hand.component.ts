import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hand } from 'src/app/shared/models/hand';
import { getHandByOwner } from '../../state/game.selector';
import { GameState } from '../../state/game.state';

@Component({
  selector: 'player-hand[owner]',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  @Input() owner!: 'opponent' | 'player';

  // hand$!: Observable<Hand>
  // hand!: Hand;

  constructor(private store: Store<GameState>) { }

  ngOnInit() {
    
  }

  get handOwner() {
    return (this.owner === 'opponent') ? 'opponentHand' : 'playerHand';
  }

}
