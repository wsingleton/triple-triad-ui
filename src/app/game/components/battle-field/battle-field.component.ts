import { Component, Input, OnChanges, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { CardSpaceComponent } from 'src/app/shared/components/card-space/card-space.component';
import { Card } from '../../../shared/models/card';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.scss']
})
export class BattleFieldComponent implements OnInit {

  @Input() $fieldCards!: Observable<Card[]>;
  fieldCards!: Card[];

  @ViewChildren(CardSpaceComponent) cardSpaces!: QueryList<CardSpaceComponent>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.$fieldCards.subscribe(next => this.fieldCards = next);
  }

  getCardPosition($event: Event) {
    this.gameService.updateDestinationIndex(+(<HTMLElement>$event.currentTarget)?.id);
  }

  flipCard(cardSpace: CardSpaceComponent) {
    cardSpace.flipCard();
  }

  detectChange(cardSpace: CardSpaceComponent) {
    console.log('FIELD CHANGE DETECTED!');
    console.log(this.cardSpaces);
    console.log(cardSpace);

    let card = cardSpace.cardData!;
    let cardPosition = cardSpace.currentPosition;
    let shouldFlip: boolean;
    switch (cardPosition) {
      case 0:
        shouldFlip = this.shouldFlipCardBelow(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 3].flipCard();

        shouldFlip = this.shouldFlipCardToRight(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 1].flipCard();

        break;

      case 1:
        shouldFlip = this.shouldFlipCardToLeft(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 1].flipCard();

        shouldFlip = this.shouldFlipCardToRight(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 1].flipCard();

        shouldFlip = this.shouldFlipCardBelow(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 3].flipCard();

        break;

      case 2:
        shouldFlip = this.shouldFlipCardBelow(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 3].flipCard();
        
        shouldFlip = this.shouldFlipCardToLeft(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 1].flipCard();

        break;

      case 3:
        shouldFlip = this.shouldFlipCardAbove(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 3].flipCard();
        
        shouldFlip = this.shouldFlipCardToRight(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 1].flipCard();

        shouldFlip = this.shouldFlipCardBelow(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 3].flipCard();

        break;

      case 4:
        shouldFlip = this.shouldFlipCardAbove(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 3].flipCard();

        shouldFlip = this.shouldFlipCardToLeft(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 1].flipCard();

        shouldFlip = this.shouldFlipCardToRight(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 1].flipCard();

        shouldFlip = this.shouldFlipCardBelow(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 3].flipCard();

        break;
      case 5:
        shouldFlip = this.shouldFlipCardAbove(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 3].flipCard();
        
        shouldFlip = this.shouldFlipCardToLeft(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 1].flipCard();

        shouldFlip = this.shouldFlipCardBelow(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 3].flipCard();

        break;

      case 6:
        shouldFlip = this.shouldFlipCardAbove(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 3].flipCard();

        shouldFlip = this.shouldFlipCardToRight(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 1].flipCard();

        break;
      case 7:
        shouldFlip = this.shouldFlipCardAbove(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 3].flipCard();

        shouldFlip = this.shouldFlipCardToLeft(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 1].flipCard();

        shouldFlip = this.shouldFlipCardToRight(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition + 1].flipCard();

        break;
      case 8:
        shouldFlip = this.shouldFlipCardAbove(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 3].flipCard();

        shouldFlip = this.shouldFlipCardToLeft(card, cardPosition);
        if (shouldFlip) this.cardSpaces['_results'][cardPosition - 1].flipCard();

        break;
    }
  }

  private shouldFlipCardAbove(card: Card, position: number) {
    
    if (position < 2) return false;

    let compCard = this.fieldCards[position - 3];
    if (!compCard) return false;

    let sameOwner = card.owner == compCard.owner;
    if (sameOwner) return false;

    console.log(`Comparing ${card.name} to ${compCard.name}`);
    return card.topRank > compCard.bottomRank;

  }

  private shouldFlipCardBelow(card: Card, position: number) {
    if (position > 5) return false;

    let compCard = this.fieldCards[position + 3];
    if (!compCard) return false;

    let sameOwner = card.owner == compCard.owner;
    if (sameOwner) return false;

    console.log(`Comparing ${card.name} to ${compCard.name}`);
    return card.bottomRank > compCard.topRank;
  }

  private shouldFlipCardToLeft(card: Card, position: number) {
    if (position == 0 || position == 3 || position == 6) return false;

    let compCard = this.fieldCards[position - 1];
    if (!compCard) return false;

    let sameOwner = card.owner == compCard.owner;
    if (sameOwner) return false;

    console.log(`Comparing ${card.name} to ${compCard.name}`);
    return card.leftRank > compCard.rightRank;
  }

  private shouldFlipCardToRight(card: Card, position: number) {
    if (position == 2 || position == 5 || position == 8) return false;

    let compCard = this.fieldCards[position + 1];
    if (!compCard) return false;

    let sameOwner = card.owner == compCard.owner;
    if (sameOwner) return false;

    console.log(`Comparing ${card.name} to ${compCard.name}`);
    return card.rightRank > compCard.leftRank;
  }

}
