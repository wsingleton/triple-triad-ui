import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardSpaceComponent } from 'src/app/shared/components/card-space/card-space.component';
import { Card } from '../../../shared/models/card';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {

  @Input() $hand!: Observable<Card[]>;
  hand!: Card[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.$hand.subscribe(next => this.hand = next);
  }
  
  peekCard(cardSpace: CardSpaceComponent) {
    cardSpace.peekCard();
  }

  selectCard(cardSpace: CardSpaceComponent) {

    if (cardSpace.metadata.containsCard){
      this.gameService.addCardToField({
        index: +(<any>cardSpace)['__ngContext__'][13][0].id,
        card: <Card>cardSpace.cardData,
        owner: cardSpace.cardData?.isStolen ? 'opponent' : 'player'
      });
    }

  }
}
