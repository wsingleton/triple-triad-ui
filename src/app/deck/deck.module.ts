import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckBuilderComponent } from './components/deck-builder/deck-builder.component';
import { DeckViewerComponent } from './components/deck-viewer/deck-viewer.component';



@NgModule({
  declarations: [DeckBuilderComponent, DeckViewerComponent],
  imports: [
    CommonModule
  ]
})
export class DeckModule { }
