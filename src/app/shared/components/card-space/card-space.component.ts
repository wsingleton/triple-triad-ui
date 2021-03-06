import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import { Card } from '../../models/card';
import { CardComponent } from '../card/card.component';

interface CardSpaceMetadata {
  containsCard: boolean;
  isFieldSpace: boolean;
}

@Component({
  selector: 'card-space[cardData]',
  templateUrl: './card-space.component.html',
  styleUrls: ['./card-space.component.scss']
})
export class CardSpaceComponent implements OnInit, OnChanges {

  @Input() cardData!: Card | null;
  @Input() isFieldSpace: boolean;
  @ViewChild(CardComponent) cardComponent!: CardComponent;

  @Output() cardAdded = new EventEmitter<SimpleChanges>();
  
  metadata!: CardSpaceMetadata

  constructor() {
    this.cardData = null;
    this.isFieldSpace = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cardData) this.cardAdded.emit(changes);
  }

  ngOnInit(): void {
    this.metadata = {
      containsCard: !!(this.cardData),
      isFieldSpace: this.isFieldSpace
    }
  }

  flipCard() {
    this.metadata.isFieldSpace && this.cardComponent.flipCard();
  }

  peekCard() {
    (!this.metadata.isFieldSpace) && this.cardComponent.selectCard();
  }

  get currentPosition() {
    return +(<any>this)['__ngContext__'][13][0].id
  }
  
}
