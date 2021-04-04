import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card';

interface CardMetadata {
  index: number,
  card: Card,
  owner: string
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private fieldCardsSubject: BehaviorSubject<Card[]>;
  $fieldCards: Observable<Card[]>;
  fieldCards!: any[];

  private opponentHandSubject: BehaviorSubject<Card[]>;
  $opponentHand: Observable<Card[]>;
  opponentHand!: any[];

  private playerHandSubject: BehaviorSubject<Card[]>;
  $playerHand: Observable<Card[]>;
  playerHand!: any[];

  private $destIndex: BehaviorSubject<number>;

  constructor(private httpClient: HttpClient) {
    this.fieldCardsSubject = new BehaviorSubject<Card[]>(new Array(9));
    this.$fieldCards = this.fieldCardsSubject.asObservable();
    this.$fieldCards.subscribe(next => this.fieldCards = next);

    this.opponentHandSubject = new BehaviorSubject<Card[]>([
      new Card('jshhe93rhi', 'Geezard', 1, 4, 1, 5, 'assets/cards/level-1/g1_geezard-card.png', false, true),
      new Card('ig538394hh', 'Funguar', 5, 1, 1, 3, 'assets/cards/level-1/g2_funguar-card.png', false, true),
      new Card('g343545g45', 'Bite Bug', 1, 3, 3, 5, 'assets/cards/level-1/g3_bite-bug-card.png', false, true),
      new Card('g46g4b544g', 'Cockatrice', 2, 1, 2, 6, 'assets/cards/level-1/g11_cockatrice-card.png', false, true),
      new Card('ser43rewe4', 'Tonberry', 3, 6, 4, 4, 'assets/cards/level-3/g32_tonberry-card.png', false, true)
    ]);

    this.$opponentHand = this.opponentHandSubject.asObservable();
    this.$opponentHand.subscribe(next => this.opponentHand = next);


    this.playerHandSubject = new BehaviorSubject<Card[]>([
      new Card('ig538394hh', 'Grat', 7, 1, 3, 1, 'assets/cards/level-2/g12_grat-card.png'),
      new Card('ser43rewe4', 'Buel', 6, 2, 2, 3, 'assets/cards/level-2/g13_buel-card.png'),
      new Card('g46g4b544g', 'Mesmerize', 5, 3, 3, 4, 'assets/cards/level-2/g14_mesmerize-card.png'),
      new Card('g343545g45', 'Glacial Eye', 6, 1, 4, 3, 'assets/cards/level-2/g15_glacial-eye-card.png'),
      new Card('pooiuy7332', 'Abyss Worm', 7, 2, 3, 5, 'assets/cards/level-3/g33_abyss-worm-card.png')
    ]);

    this.$playerHand = this.playerHandSubject.asObservable();
    this.$playerHand.subscribe(next => this.playerHand = next);

    this.$destIndex = new BehaviorSubject<number>(NaN);
    
  }

  private get destIndex() {
    return this.$destIndex.value
  }

  updateDestinationIndex(index: number) {
    this.$destIndex.next(index);
  }


  addCardToField(cardMetadata: CardMetadata) {

    if (!(this.destIndex >= 0)) {
      console.error('Select a field space!');
    }
    
    if (cardMetadata.card && this.destIndex >= 0 && cardMetadata.index >= 0) {

      if (this.fieldCards[this.destIndex]) {
        console.error('There is already a card in that space!');
        this.$destIndex.next(NaN);
        return;
      }

      cardMetadata.card.isSelected = false;
      cardMetadata.card.inPlay = true;

      if (cardMetadata.owner == 'opponent') {
        this.opponentHand[cardMetadata.index] = null;
      } else if (cardMetadata.owner == 'player') {
        this.playerHand[cardMetadata.index] = null;
      }
      
      this.fieldCards[this.destIndex] = cardMetadata.card;
      this.fieldCardsSubject.next(this.fieldCards);
      this.$destIndex.next(NaN);

    }
  }
  
}
