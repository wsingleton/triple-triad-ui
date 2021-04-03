import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationBuilder, query, animation, useAnimation, AnimationPlayer } from '@angular/animations';
import { Card } from '../../models/card';

const selectPlayerCardAnimation = animation([
  state('selected', style({
    'transform': 'translateX(-25%)'
  })),
  transition('selected => unselected', animate('1s', style({
    'transform': 'translateX(0%)'
  }))),
  transition('unselected => selected', animate('1s', style({
    'transform': 'translateX(-25%)'
  })))
]);

const selectOpponentCardAnimation = animation([
  state('selected', style({
    'transform': 'translateX(25%)'
  })),
  transition('selected => unselected', animate('1s', style({
    'transform': 'translateX(0%)'
  }))),
  transition('unselected => selected', animate('1s', style({
    'transform': 'translateX(25%)'
  })))
]);

@Component({
  selector: 'card[cardData]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('selected', style({
        'transform': 'translateX(25%)'
      })),
      transition('default => stolen', animate('500ms', style({
        'transform': 'rotateY(360deg)'
      }))),
      transition('stolen => default', animate('500ms', style({
        'transform': 'rotateY(360deg)'
      }))),
      transition('selected => unselected', animate('250ms', style({
        'transform': 'translateX(0%)'
      }))),
      transition('unselected => selected', animate('250ms', style({
        'transform': 'translateX(25%)'
      })))
    ])
  ]
})
export class CardComponent implements AfterViewInit {

  @Input() cardData: Card | null;
  @ViewChild('card') cardElement!: ElementRef;
  animationPlayer!: AnimationPlayer;

  constructor(private animationBuilder: AnimationBuilder) {
    this.cardData = null;
  }

  ngAfterViewInit(): void {
    console.log(this.cardElement);
  }

  flipCard(): void {

    if (!this.cardData || !this.cardData.inPlay) {
      return;  
    }

    this.cardData.isStolen = !this.cardData.isStolen;

  }

  selectCard(): void {

    if (!this.cardData || this.cardData.inPlay) {
      return;
    }

    // if (this.cardData?.isStolen) {
    //   console.log(this.cardElement);
    //   this.animationPlayer = this.animationBuilder.build([
    //     useAnimation(selectOpponentCardAnimation)
    //   ]).create(this.cardElement.nativeElement);
    // } else {
    //   console.log(this.cardElement);
    //   this.animationPlayer = this.animationBuilder.build([
    //     useAnimation(selectPlayerCardAnimation)
    //   ]).create(this.cardElement.nativeElement);
    // }

    // this.animationPlayer.onDone(() => {
    //   console.log('animation complete!');
    //   this.animationPlayer.destroy();
    // });

    // this.animationPlayer.play();

    this.cardData.isSelected = !this.cardData.isSelected;
    
  }

}
