import { Card } from "./card";

export class Player {
    
    playerName: string;
    rank: number;
    wins: number;
    losses: number;
    streak: number;
    deck: Card[];

    constructor(playerName: string, rank :number, wins :number, losses :number, streak :number, ...deck: Card[]) {
        this.playerName = playerName;
        this.rank = rank;
        this.wins = wins;
        this.losses = losses;
        this.streak = streak;
        this.deck = deck;
    }
    
}
