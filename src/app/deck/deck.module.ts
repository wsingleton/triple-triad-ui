import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { DeckViewerComponent } from './components/deck-viewer/deck-viewer.component';
import { SharedModule } from '../shared/shared.module';
import { ListedCardComponent } from './components/listed-card/listed-card.component';



@NgModule({
  declarations: [DeckBuilderComponent, DeckViewerComponent, ListedCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeckModule { }
