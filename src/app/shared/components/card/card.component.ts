import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Card } from '../../models/card';

@Component({
  selector: 'card[cardData]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('default => stolen', animate('500ms', style({
        'transform': 'rotateY(360deg)'
      }))),
      transition('stolen => default', animate('500ms', style({
        'transform': 'rotateY(360deg)'
      })))
    ])
  ]
})
export class CardComponent {

  @Input() cardData: Card | null;
  @Input() isFieldCard: boolean;

  constructor(private cdRef: ChangeDetectorRef) {
    this.cardData = null;
    this.isFieldCard = false;
  }

  flipCard(): void {
    if (!this.cardData || !this.cardData.inPlay) return;
    this.cardData.isStolen = !this.cardData.isStolen;
    this.cdRef.detectChanges();
  }

  selectCard(): void {
    if (!this.cardData || this.cardData.inPlay) return;
    this.cardData.isSelected = !this.cardData.isSelected;
    this.cdRef.detectChanges();
  }

  determineBackgroundGradient() {
    return (this.cardData?.isStolen ? 'linear-gradient(#ecd8d8, #c65d7b)' : 'linear-gradient(#e5fdfd, #105db5)')
  }

}
