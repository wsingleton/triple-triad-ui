import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Element } from 'src/app/shared/models/element';
import { Card } from '../../shared/models/card';

interface CardMetadata {
  index: number,
  card: Card,
  owner: string
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private fieldCardsSource: BehaviorSubject<(Card | null)[]>;
  fieldCards$: Observable<(Card | null)[]>;

  private opponentHandSource: BehaviorSubject<(Card | null)[]>;
  opponentHand$: Observable<(Card | null)[]>;

  private playerHandSource: BehaviorSubject<(Card | null)[]>;
  playerHand$: Observable<(Card | null)[]>;

  private destinationIndexSource: BehaviorSubject<number>;

  constructor(private httpClient: HttpClient) {
    
    this.fieldCardsSource = new BehaviorSubject<(Card | null)[]>(new Array(9));
    this.fieldCards$ = this.fieldCardsSource.asObservable();

    this.opponentHandSource = new BehaviorSubject<(Card | null)[]>([
      new Card('jshhe93rhi', 'Geezard', 1, 4, 1, 5, 'assets/cards/level-1/g1_geezard-card.png', Element.NONE, false, true),
      new Card('ig538394hh', 'Funguar', 5, 1, 1, 3, 'assets/cards/level-1/g2_funguar-card.png', Element.NONE, false, true),
      new Card('g343545g45', 'Bite Bug', 1, 3, 3, 5, 'assets/cards/level-1/g3_bite-bug-card.png', Element.NONE, false, true),
      new Card('g46g4b544g', 'Cockatrice', 2, 1, 2, 6, 'assets/cards/level-1/g11_cockatrice-card.png', Element.THUNDER, false, true),
      new Card('ser43rewe4', 'Quistis', 9, 6, 10, 2, 'assets/cards/level-10/g104_quistis-card.png', Element.NONE, false, true)
    ]);

    this.opponentHand$ = this.opponentHandSource.asObservable();


    this.playerHandSource = new BehaviorSubject<(Card | null)[]>([
      new Card('ig538394hh', 'Grat', 7, 1, 3, 1, 'assets/cards/level-2/g12_grat-card.png'),
      new Card('ser43rewe4', 'Buel', 6, 2, 2, 3, 'assets/cards/level-2/g13_buel-card.png'),
      new Card('g46g4b544g', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-6/g64_oilboyle-card.png'),
      new Card('g343545g45', 'Glacial Eye', 6, 1, 4, 3, 'assets/cards/level-2/g15_glacial-eye-card.png', Element.ICE),
      new Card('pooiuy7332', 'Abyss Worm', 7, 2, 3, 5, 'assets/cards/level-3/g33_abyss-worm-card.png', Element.EARTH)
    ]);

    this.playerHand$ = this.playerHandSource.asObservable();

    this.destinationIndexSource = new BehaviorSubject<number>(NaN);
    
  }

  private get destIndex() {
    return this.destinationIndexSource.value
  }

  private get fieldCards() {
    return this.fieldCardsSource.value;
  }

  private get playerHand() {
    return this.playerHandSource.value;
  }

  private get opponentHand() {
    return this.opponentHandSource.value;
  }

  updateDestinationIndex(index: number): void {
    this.destinationIndexSource.next(index);
  }


  addCardToField(cardMetadata: CardMetadata) {

    if (!(this.destIndex >= 0)) {
      console.error('Select a field space!');
    }
    
    if (cardMetadata.card && this.destIndex >= 0 && cardMetadata.index >= 0) {

      if (this.fieldCards[this.destIndex]) {
        console.error('There is already a card in that space!');
        this.destinationIndexSource.next(NaN);
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
      this.fieldCardsSource.next(this.fieldCards);
      this.destinationIndexSource.next(NaN);

    }
  }
  
}
