import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CardSpace } from 'src/app/shared/models/card-space';
import { GameState } from '../../state/game.state';
import { getFieldCardSpaces } from '../../state/game.selector';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  fieldSpaces$!: Observable<CardSpace[]>;
  fieldSpaces!: CardSpace[];

  constructor(private store: Store<{game: GameState}>) { }

  ngOnInit(): void {
    this.fieldSpaces$ = this.store.pipe(select(getFieldCardSpaces)),
    this.fieldSpaces$.subscribe(spaces => this.fieldSpaces = spaces);
  }

}
