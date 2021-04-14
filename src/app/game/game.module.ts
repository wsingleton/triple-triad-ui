import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { BattleFieldComponent } from './components/battle-field/battle-field.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { GameComponent } from './components/game/game.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './state/game.reducer';
import { CastToHandIndexPipe } from './pipes/cast-to-hand-index.pipe';
import { CardSpaceComponent } from './components/card-space/card-space.component';

@NgModule({
  declarations: [
    GameComponent,
    BattleFieldComponent,
    PlayerHandComponent,
    CardSpaceComponent,
    CastToHandIndexPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ game: gameReducer })
  ],
  exports: [
    BattleFieldComponent,
    PlayerHandComponent
  ]
})
export class GameModule { }
