import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCardSpaceMetadata } from 'src/app/game/state/game.selector';
import { GameState } from 'src/app/game/state/game.state';
import { CardSpace } from '../../../shared/models/card-space';
import { SpaceType } from '../../../shared/models/space-type';

@Component({
  selector: 'card-space[placement][position]',
  templateUrl: './card-space.component.html',
  styleUrls: ['./card-space.component.scss']
})
export class CardSpaceComponent implements OnInit {

  @Input() placement!: 'opponentHand' | 'playerHand' | 'field';
  @Input() position!: number;
  private spaceType!: SpaceType;
  isPeeked: boolean;

  metadata$!: Observable<CardSpace>;
  metadata!: CardSpace;
  
  
  constructor(private store: Store<{game: GameState}>) {
    this.isPeeked = false;
  }

  ngOnInit() {
    
    switch (this.placement) {
      case 'opponentHand':
        this.spaceType = SpaceType.OPPONENT_HAND;
        break;
      case 'playerHand':
        this.spaceType = SpaceType.PLAYER_HAND;
        break;
      case 'field': 
        this.spaceType = SpaceType.FIELD;
    }

    this.metadata$ = this.store.pipe(select(getCardSpaceMetadata, { placement: this.spaceType, position: this.position }));
    this.metadata$.subscribe(newMetadata => this.metadata = newMetadata);
  }

  togglePeek() {
    if (!this.metadata.cardData || this.placement === 'field') return;
    this.isPeeked = !this.isPeeked;
  }
  
}
