import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckViewerComponent } from './components/deck-viewer/deck-viewer.component';
import { SharedModule } from '../shared/shared.module';
import { ListedCardComponent } from './components/listed-card/listed-card.component';


@NgModule({
  declarations: [
    DeckViewerComponent, 
    ListedCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeckModule { }
