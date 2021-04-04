import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeckBuilderComponent } from './deck/components/deck-builder/deck-builder.component';
import { DeckViewerComponent } from './deck/components/deck-viewer/deck-viewer.component';
import { GameComponent } from './game/components/game/game.component';

const routes: Routes = [
  { 
    path: 'game',
    component: GameComponent
  },
  {
    path: 'deck',
    children: [
      {
        path: 'builder',
        component: DeckBuilderComponent
      },
      {
        path: 'viewer',
        component: DeckViewerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
