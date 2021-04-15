import { CardSpace } from "src/app/shared/models/card-space";
import { Field } from "src/app/shared/models/field";
import { Hand } from "src/app/shared/models/hand";
import { Player } from "src/app/shared/models/player";

export interface GameState {
    gameId: number;
    field: Field;
    opponentHand: Hand;
    playerHand: Hand;
    players: (Player | undefined)[];
    turnOwner: Player | undefined;
    selectedCard: CardSpace | undefined;
    selectedSpace: CardSpace | undefined;
    winner: Player | undefined;

}