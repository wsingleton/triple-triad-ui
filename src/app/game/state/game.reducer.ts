import { createReducer, on } from "@ngrx/store";
import { CardSpace } from "src/app/shared/models/card-space";
import { Element } from "src/app/shared/models/element";
import { Player } from "src/app/shared/models/player";
import { GameState } from "./game.state";
import { cardAddedToHandFromDeck, cardMovedFromHandToField, cardRemovedFromHandBackToDeck, cardTaken, fieldSpaceSelected, handCardSelected, moveSelectedCardToSelectedSpace } from "./game.actions";
import { Card } from "src/app/shared/models/card";
import { Field } from "src/app/shared/models/field";

const initialState: GameState = {
    gameId: 1,
    field: [
      new CardSpace('f-0'), new CardSpace('f-1'), new CardSpace('f-2'),
      new CardSpace('f-3'), new CardSpace('f-4'), new CardSpace('f-5'),
      new CardSpace('f-6'), new CardSpace('f-7'), new CardSpace('f-8'),
    ],
    opponentHand: {
      0: new CardSpace('o-0', Element.NONE, new Card('jshhe93rhi', 'Geezard', 1, 4, 1, 5, 'assets/cards/level-1/g1_geezard-card.png', Element.NONE), 'opponent'),
      1: new CardSpace('o-1', Element.NONE, new Card('ig538394hh', 'Funguar', 5, 1, 1, 3, 'assets/cards/level-1/g2_funguar-card.png', Element.NONE), 'opponent'),
      2: new CardSpace('o-2', Element.NONE, new Card('g343545g45', 'Bite Bug', 1, 3, 3, 5, 'assets/cards/level-1/g3_bite-bug-card.png', Element.NONE), 'opponent'),
      3: new CardSpace('o-3', Element.NONE, new Card('g46g4b544g', 'Cockatrice', 2, 1, 2, 6, 'assets/cards/level-1/g11_cockatrice-card.png', Element.THUNDER), 'opponent'),
      4: new CardSpace('o-4', Element.NONE, new Card('ser43rewe4', 'Quistis', 9, 6, 10, 2, 'assets/cards/level-10/g104_quistis-card.png', Element.NONE), 'opponent')
    },
    playerHand: {
      0: new CardSpace('p-0', Element.NONE, new Card('ig538394hh', 'Grat', 7, 1, 3, 1, 'assets/cards/level-2/g12_grat-card.png'), 'player'),
      1: new CardSpace('p-1', Element.NONE, new Card('ser43rewe4', 'Buel', 6, 2, 2, 3, 'assets/cards/level-2/g13_buel-card.png'), 'player'),
      2: new CardSpace('p-2', Element.NONE, new Card('g46g4b544g', 'Oilboyle', 1, 8, 4, 8, 'assets/cards/level-6/g64_oilboyle-card.png'), 'player'),
      3: new CardSpace('p-3', Element.NONE, new Card('g343545g45', 'Glacial Eye', 6, 1, 4, 3, 'assets/cards/level-2/g15_glacial-eye-card.png', Element.ICE), 'player'),
      4: new CardSpace('p-4', Element.NONE, new Card('pooiuy7332', 'Abyss Worm', 7, 2, 3, 5, 'assets/cards/level-3/g33_abyss-worm-card.png', Element.EARTH), 'player')
    },
    players: [
        new Player('Seifer', 10, 0, 0, 0),
        new Player('Squall', 10, 0, 0, 0)
    ],
    turnOwner: undefined,
    winner: undefined,
    selectedCard: undefined,
    selectedSpace: undefined
};

export const gameReducer = createReducer(
    
    initialState,

    on(handCardSelected, (state = initialState, {handIndex, owner}) => {

        let hand = (owner === 'opponent') ? state.opponentHand : state.playerHand;
        let alteredSpace = hand[<0|1|2|3|4>handIndex];
        console.log(state)
        return (owner === 'opponent') ? 
        { 
            ...state,
            opponentHand: {
                ...state.opponentHand
            },
            selectedCard: alteredSpace
        }
        :
        {
            ...state,
            playerHand: {
                ...state.playerHand
            },
            selectedCard: alteredSpace
        }


    }),

    on(fieldSpaceSelected, (state = initialState, {fieldIndex}) => {
        let key = <0|1|2|3|4|5|6|7|8>fieldIndex;
        let newState = { ...state, selectedSpace: state.field[key] }
        console.log(newState)
        return newState;
    }),

    on(moveSelectedCardToSelectedSpace, (state = initialState) => {
        
        let fieldKey = state.selectedSpace!.position;
        let handKey = <0|1|2|3|4>state.selectedCard!.position;

        if (state.selectedCard!.owner == 'opponent') { 
            return { 
                ...state,
                field: { 
                    ...state.field, 
                    [fieldKey]: state.selectedCard! 
                },
                opponentHand: { 
                    ...state.opponentHand, 
                    [handKey]: {
                        cardData: undefined, 
                        containsCard: state.opponentHand[handKey].containsCard,  
                        spaceType: state.opponentHand[handKey].spaceType,
                        position: state.opponentHand[handKey].position
                    }
                },
                selectedCard: undefined,
                selectedSpace: undefined
            };
        } else {
            return { 
                ...state,
                field: { 
                    ...state.field, 
                    [fieldKey]: state.selectedCard! 
                },
                playerHand: { 
                    ...state.playerHand,
                    [handKey]: { 
                        cardData: undefined, 
                        containsCard: state.playerHand[handKey].containsCard,  
                        spaceType: state.playerHand[handKey].spaceType,
                        position: state.playerHand[handKey].position
                    }
                },
                selectedCard: undefined,
                selectedSpace: undefined
            };

        }
        
    })
);
