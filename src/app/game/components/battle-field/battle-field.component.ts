import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CardSpace } from 'src/app/shared/models/card-space';
import { GameState } from '../../state/game.state';
import { getFieldCardSpaces, getSelectedCard } from '../../state/game.selector';
import { CardSpaceComponent } from '../card-space/card-space.component';
import { fieldSpaceSelected, moveSelectedCardToSelectedSpace } from '../../state/game.actions';
import { Field } from 'src/app/shared/models/field';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  field$!: Observable<Field>;
  field!:  Field;

  selectedCard$!: Observable<CardSpace | undefined>;
  selectedCard!: CardSpace | undefined;

  constructor(private store: Store<{game: GameState}>) { }

  ngOnInit(): void {
    this.field$ = this.store.pipe(select(getFieldCardSpaces)),
    this.field$.subscribe(spaces => this.field = spaces);

    this.selectedCard$ = this.store.pipe(select(getSelectedCard));
    this.selectedCard$.subscribe(nextSelectedCard => this.selectedCard = nextSelectedCard);
  }

  selectSpace(cardSpace: CardSpaceComponent) {
    if (cardSpace.metadata.containsCard) {
      console.log('There is already a card there!');
      return;
    }

    if (!this.selectedCard) {
      console.log('You must select a card from your hand before selecting a field space!');
      return;
    }

    this.store.dispatch(fieldSpaceSelected({fieldIndex: cardSpace.position}));
    this.store.dispatch(moveSelectedCardToSelectedSpace());
  }

}
