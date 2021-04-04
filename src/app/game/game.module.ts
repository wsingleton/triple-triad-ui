import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

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
    SharedModule,
    HttpClientModule
  ],
  exports: [
    BattleFieldComponent,
    PlayerHandComponent
  ]
})
export class GameModule { }
