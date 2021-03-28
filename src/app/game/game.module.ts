import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleFieldComponent } from './components/battle-field/battle-field.component';
import { CardComponent } from './components/card/card.component';
import { CardSpaceComponent } from './components/card-space/card-space.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';



@NgModule({
  declarations: [
    BattleFieldComponent,
    CardComponent,
    CardSpaceComponent,
    PlayerHandComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    BattleFieldComponent,
    PlayerHandComponent
  ]
})
export class GameModule { }
