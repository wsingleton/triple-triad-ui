import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hand } from 'src/app/shared/models/hand';
import { handCardSelected } from '../../state/game.actions';
import { getHandByOwner, getTurnOwner } from '../../state/game.selector';
import { GameState } from '../../state/game.state';
import { CardSpaceComponent } from '../card-space/card-space.component';

@Component({
  selector: 'player-hand[owner]',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  @Input() owner!: 'opponent' | 'player';
  
  turnOwner$!: Observable<'opponent' | 'player'>;
  turnOwner!: 'opponent' | 'player';

  constructor(private store: Store<{game: GameState}>) { }

  ngOnInit() {
    this.turnOwner$ = this.store.pipe(select(getTurnOwner));
    this.turnOwner$.subscribe(nextTurnOwner => this.turnOwner = nextTurnOwner);
  }

  get handOwner() {
    return (this.owner === 'opponent') ? 'opponentHand' : 'playerHand';
  }

  selectCard(cardSpace: CardSpaceComponent) {
    if (this.turnOwner != this.owner) {
      console.log('It\'s not your turn.');
      return;
    }

    let cardPosition = <0 | 1 | 2 | 3 | 4>cardSpace.position;
    this.store.dispatch(handCardSelected({ handIndex: cardPosition, owner: this.owner}));
  }

}
