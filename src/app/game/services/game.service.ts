import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardSpace } from 'src/app/shared/models/card-space';
import { Element } from 'src/app/shared/models/element';
import { Player } from 'src/app/shared/models/player';
import { Card } from '../../shared/models/card';
import { GameState } from '../state/game.state';

interface CardMetadata {
  index: number,
  card: Card,
  owner: string
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameState: BehaviorSubject<GameState>;
  gameState$: Observable<GameState>;

  private fieldCardsSource: BehaviorSubject<(Card | null)[]>;
  fieldCards$: Observable<(Card | null)[]>;

  private opponentHandSource: BehaviorSubject<(Card | null)[]>;
  opponentHand$: Observable<(Card | null)[]>;

  private playerHandSource: BehaviorSubject<(Card | null)[]>;
  playerHand$: Observable<(Card | null)[]>;

  private destinationIndexSource: BehaviorSubject<number>;

  constructor(private httpClient: HttpClient) {

    let opponent = new Player('Seifer', 10, 0, 0, 0);
    let player = new Player('Squall', 10, 0, 0, 0);

    this.gameState = new BehaviorSubject<GameState>({
      gameId: 1,
      field: [
        new CardSpace('f-0'), new CardSpace('f-1'), new CardSpace('f-2'),
        new CardSpace('f-3'), new CardSpace('f-4'), new CardSpace('f-5'),
        new CardSpace('f-6'), new CardSpace('f-7'), new CardSpace('f-8'),
      ],
      opponentHand: [
        new CardSpace('o-0', Element.NONE, new Card('l01.g001.n', 'Geezard', 1, 4, 1, 5, 'assets/cards/level-1/g1_geezard-card.png')),
        new CardSpace('o-1', Element.NONE, new Card('l01.g002.n', 'Funguar', 5, 1, 1, 3, 'assets/cards/level-1/g2_funguar-card.png')),
        new CardSpace('o-2', Element.NONE, new Card('l01.g003.n', 'Bite Bug', 1, 3, 3, 5, 'assets/cards/level-1/g3_bite-bug-card.png')),
        new CardSpace('o-3', Element.NONE, new Card('l01.g004.n', 'Red Bat', 6, 1, 1, 2, 'assets/cards/level-1/g4_red-bat-card.png')),
        new CardSpace('o-4', Element.NONE, new Card('l01.g005.n', 'Blobra', 2, 3, 1, 5, 'assets/cards/level-1/g5_blobra-card.png'))
      ],
      playerHand: [
        new CardSpace('p-0', Element.NONE, new Card('l03.g029.f', 'SAM08G', 5, 6, 2, 4, 'assets/cards/level-3/g29_sam08g-card.png', Element.FIRE)),
        new CardSpace('p-1', Element.NONE, new Card('l03.g030.f', 'Death Claw', 4, 4, 7, 2, 'assets/cards/level-3/g30_death-claw-card.png', Element.FIRE)),
        new CardSpace('p-2', Element.NONE, new Card('l03.g031.n', 'Cactuar', 6, 2, 6, 3, 'assets/cards/level-3/g31_cactuar-card.png')),
        new CardSpace('p-3', Element.NONE, new Card('l03.g032.n', 'Tonberry', 3, 6, 4, 4, 'assets/cards/level-3/g32_tonberry-card.png')),
        new CardSpace('p-4', Element.NONE, new Card('l03.g033.e', 'Abyss Worm', 7, 2, 3, 5, 'assets/cards/level-3/g33_abyss-worm-card.png', Element.EARTH))
      ],
      players: [
        opponent,
        player
      ],
      turnOwner: opponent,
      winner: undefined
    });

    this.gameState$ = this.gameState.asObservable();
    
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
