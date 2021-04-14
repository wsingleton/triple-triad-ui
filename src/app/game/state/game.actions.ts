import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card';

export const cardAddedToHandFromDeck = createAction(
    '[Game] Card Added To Hand From Deck',
    props<{handIndex: number, cardData: Card, owner: 'opponent' | 'player'}>()
);

export const cardRemovedFromHandBackToDeck = createAction(
    '[Game] Card Removed From Hand Back To Deck',
    props<{handIndex: number, owner: 'opponent' | 'player'}>()
);

export const handCardSelected = createAction(
    '[Game] Hand Card Selected', 
    props<{handIndex: 0 | 1 | 2 | 3 | 4, owner: 'opponent' | 'player'}>()
);

export const fieldSpaceSelected = createAction(
    '[Game] Field Space Selected',
    props<{fieldIndex: number}>()
);

export const cardMovedFromHandToField = createAction(
    '[Game] Card Moved From Hand To Field',
    props<{currentTurnOwner: 'opponent' | 'player'}>()
);

export const cardTaken = createAction(
    '[Game] Card Taken',
    props<{takenFieldIndex: number, newOwner: 'opponent' | 'player'}>()
)