import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
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

  @Input() fieldCards$!: Observable<(Card | null)[]>;
  fieldCards!: (Card | null)[];

  @ViewChildren(CardSpaceComponent) cardSpaces!: QueryList<CardSpaceComponent>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.fieldCards$.subscribe(next => this.fieldCards = next);
  }

  getCardPosition($event: Event) {
    this.gameService.updateDestinationIndex(+(<HTMLElement>$event.currentTarget)?.id);
  }

  compareAdjacentSpaces(cardSpace: CardSpaceComponent) {

    let card = cardSpace.cardData!;
    let cardPosition = cardSpace.currentPosition;
    let spaces = this.cardSpaces['_results'];

    switch (cardPosition) {
      case 0:
        this.shouldFlipCardBelow(card, cardPosition) && spaces[cardPosition + 3].flipCard();
        this.shouldFlipCardToRight(card, cardPosition) && spaces[cardPosition + 1].flipCard();
        break;

      case 1:
        this.shouldFlipCardToLeft(card, cardPosition) && spaces[cardPosition - 1].flipCard();
        this.shouldFlipCardToRight(card, cardPosition) && spaces[cardPosition + 1].flipCard();
        this.shouldFlipCardBelow(card, cardPosition) && spaces[cardPosition + 3].flipCard();
        break;

      case 2:
        this.shouldFlipCardBelow(card, cardPosition) && spaces[cardPosition + 3].flipCard();
        this.shouldFlipCardToLeft(card, cardPosition) && spaces[cardPosition - 1].flipCard();
        break;

      case 3:
        this.shouldFlipCardAbove(card, cardPosition) && spaces[cardPosition - 3].flipCard();
        this.shouldFlipCardToRight(card, cardPosition) && spaces[cardPosition + 1].flipCard();
        this.shouldFlipCardBelow(card, cardPosition) && spaces[cardPosition + 3].flipCard();
        break;

      case 4:
        this.shouldFlipCardAbove(card, cardPosition) && spaces[cardPosition - 3].flipCard();
        this.shouldFlipCardToLeft(card, cardPosition) && spaces[cardPosition - 1].flipCard();
        this.shouldFlipCardToRight(card, cardPosition) && spaces[cardPosition + 1].flipCard();
        this.shouldFlipCardBelow(card, cardPosition) && spaces[cardPosition + 3].flipCard();
        break;

      case 5:
        this.shouldFlipCardAbove(card, cardPosition) && spaces[cardPosition - 3].flipCard();
        this.shouldFlipCardToLeft(card, cardPosition) && spaces[cardPosition - 1].flipCard();
        this.shouldFlipCardBelow(card, cardPosition) && spaces[cardPosition + 3].flipCard();
        break;

      case 6:
        this.shouldFlipCardAbove(card, cardPosition) && spaces[cardPosition - 3].flipCard();
        this.shouldFlipCardToRight(card, cardPosition) && spaces[cardPosition + 1].flipCard();
        break;

      case 7:
        this.shouldFlipCardAbove(card, cardPosition) && spaces[cardPosition - 3].flipCard();
        this.shouldFlipCardToLeft(card, cardPosition) && spaces[cardPosition - 1].flipCard();
        this.shouldFlipCardToRight(card, cardPosition) && spaces[cardPosition + 1].flipCard();
        break;

      case 8:
        this.shouldFlipCardAbove(card, cardPosition) && spaces[cardPosition - 3].flipCard();
        this.shouldFlipCardToLeft(card, cardPosition) && spaces[cardPosition - 1].flipCard();
        break;
    }
  }

  private shouldFlipCardAbove(card: Card, position: number) {
    if (position < 2) return false;

    let compCard = this.fieldCards[position - 3];
    if (!compCard) return false;
    if (card.owner == compCard.owner) return false;

    return card.topRank > compCard.bottomRank;
  }

  private shouldFlipCardBelow(card: Card, position: number) {
    if (position > 5) return false;

    let compCard = this.fieldCards[position + 3];
    if (!compCard) return false;
    if (card.owner == compCard.owner) return false;

    return card.bottomRank > compCard.topRank;
  }

  private shouldFlipCardToLeft(card: Card, position: number) {
    if (position == 0 || position == 3 || position == 6) return false;

    let compCard = this.fieldCards[position - 1];
    console.dir(card);
    console.dir(compCard);
    if (!compCard) return false;
    if (card.owner == compCard.owner) return false;

    return card.leftRank > compCard.rightRank;
  }

  private shouldFlipCardToRight(card: Card, position: number) {
    if (position == 2 || position == 5 || position == 8) return false;

    let compCard = this.fieldCards[position + 1];
    if (!compCard) return false;
    if (card.owner == compCard.owner) return false;

    return card.rightRank > compCard.leftRank;
  }

}
