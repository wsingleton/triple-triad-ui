import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { BattleFieldComponent } from './components/battle-field/battle-field.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    BattleFieldComponent,
    PlayerHandComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    BattleFieldComponent,
    PlayerHandComponent
  ]
})
export class GameModule { }
