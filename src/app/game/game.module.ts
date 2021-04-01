import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleFieldComponent } from './components/battle-field/battle-field.component';
import { CardComponent } from '../shared/components/card/card.component';
import { CardSpaceComponent } from '../shared/components/card-space/card-space.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { GameComponent } from './components/game/game.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BattleFieldComponent,
    PlayerHandComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BattleFieldComponent,
    PlayerHandComponent
  ]
})
export class GameModule { }
