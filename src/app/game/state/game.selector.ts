import { createSelector, State } from "@ngrx/store";
import { CardSpace } from "src/app/shared/models/card-space";
import { Hand } from "src/app/shared/models/hand";
import { SpaceType } from "src/app/shared/models/space-type";
import { GameState } from "./game.state";


export const getFieldCardSpaces = createSelector(
    (state: {game: GameState}) => state.game.field,
    (fieldSpaces: CardSpace[]) => fieldSpaces
);

export const getHandByOwner = createSelector(
    (game: GameState, props: { owner: 'opponent' | 'player' | 'field' }) => {
        return (props.owner === 'opponent') ? game.opponentHand : game.playerHand
    },
    (hand: Hand) => hand
);

export const getPlayerHandCardSpaces = createSelector(
    (state: {game: GameState}) => state.game.playerHand,
    (playerHandSpaces: Hand) => playerHandSpaces
);

export const getGame = createSelector(
    (state: {game: GameState}) => state.game,
    (game: GameState) => game
)

export const getCardSpaceMetadata = createSelector(
    (state: {game: GameState}, props: { placement: SpaceType, position: number }) => {
        switch (props.placement) {
            case SpaceType.OPPONENT_HAND:
                if (props.position > 4 || props.position < 0) throw new Error ('Invalid position index provided!'); 
                return state.game.opponentHand[<0 | 1 | 2 | 3 | 4>props.position];
            case SpaceType.PLAYER_HAND:
                if (props.position > 4 || props.position < 0) throw new Error ('Invalid position index provided!');
                return state.game.playerHand[<0 | 1 | 2 | 3 | 4>props.position];
            case SpaceType.FIELD:
                if (props.position > 8 || props.position < 0) throw new Error ('Invalid position index provided!');
                return state.game.field[props.position]
        }
    },
    (cardSpace: CardSpace) => cardSpace
);

// export const selectCardByIndexPosition = createSelector(
//     (state: {game: GameState}, props: { placement: 'opponent' | 'player' | 'vacant', index: 0 | 1 | 2 | 3 | 4 }) => {
//         switch (props.placement) {
//             case 'opponent':
//                 return state.game.opponentHand;
//             case 'player':
//                 return state.game.playerHand;
//             case 'vacant':
//                 return state.game.field;
//         }
//     },
//     (hand: Hand, props) => {
//         return hand[props.index]?.cardData
//     }
// );

