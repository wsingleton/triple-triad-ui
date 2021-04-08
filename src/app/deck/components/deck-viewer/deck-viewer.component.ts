import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'deck-viewer',
  templateUrl: './deck-viewer.component.html',
  styleUrls: ['./deck-viewer.component.scss']
})
export class DeckViewerComponent implements OnInit {

  deckCards: Card[];
  selectedCard: Card | null;
  start: number;
  end: number;
  currentPage: number;

  constructor(private cardService: CardService) {
    this.deckCards = cardService.getPlayerCards('player-1');
    this.selectedCard = null;
    this.start = 0;
    this.end = 11;
    this.currentPage = 1;
  }

  ngOnInit(): void {
  }

  displaySelected(card: Card) {
    this.selectedCard = card;
  }

  nextPage() {
    if (this.end >= this.deckCards.length) return;
    this.start += 11;
    this.end += 11;
    this.currentPage += 1;
    this.selectedCard = null;
  }

  previousPage() {
    if (this.start <= 0) return;
    this.start -= 11;
    this.end -= 11;
    this.currentPage -= 1;
    this.selectedCard = null;
  }

}
