import { CardSpace } from "src/app/shared/models/card-space";
import { Player } from "src/app/shared/models/player";

export interface GameState {
    gameId: number;
    field: CardSpace[];
    opponentHand: CardSpace[];
    playerHand: CardSpace[];
    players: Player[];
    turnOwner: Player;
    winner: Player | undefined
}