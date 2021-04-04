import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../../shared/models/card';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  fieldCards$!: Observable<(Card | null)[]>;
  opponentHand$!: Observable<(Card | null)[]>;
  playerHand$!: Observable<(Card | null)[]>;

  constructor(private gameService: GameService) {
    this.fieldCards$ = this.gameService.fieldCards$;
    this.opponentHand$ = this.gameService.opponentHand$;
    this.playerHand$ = this.gameService.playerHand$;
  }

}
