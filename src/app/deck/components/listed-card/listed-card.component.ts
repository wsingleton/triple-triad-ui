import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/shared/models/card';

@Component({
  selector: 'listed-card',
  templateUrl: './listed-card.component.html',
  styleUrls: ['./listed-card.component.scss']
})
export class ListedCardComponent implements OnInit {

  @Input() card!: Card;
  @Output() cardSelected = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCard() {
    this.cardSelected.emit(this.card);
  }

}
