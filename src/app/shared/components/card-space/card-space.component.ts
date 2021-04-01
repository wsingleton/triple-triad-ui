import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../models/card';
import { CardComponent } from '../card/card.component';

interface CardSpaceMetadata {
  containsCard: boolean;
  isFieldSpace: boolean;
}

@Component({
  selector: 'card-space[cardData][isFieldSpace]',
  templateUrl: './card-space.component.html',
  styleUrls: ['./card-space.component.scss']
})
export class CardSpaceComponent implements OnInit {

  @Input() cardData!: Card;
  @Input() isFieldSpace!: boolean;
  @ViewChild(CardComponent) cardComponent!: CardComponent
  
  metadata!: CardSpaceMetadata

  ngOnInit(): void {
    this.metadata = {
      containsCard: true,
      isFieldSpace: this.isFieldSpace
    }
  }

  flipCard() {
    if (this.metadata.isFieldSpace) {
      this.cardComponent.flipCard();
    }
  }
  
}