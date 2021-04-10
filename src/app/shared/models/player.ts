export class Player {
    
    playerName: string;
    rank: number;
    wins: number;
    losses: number;
    streak: number;

    constructor(playerName: string, rank :number, wins :number, losses :number, streak :number) {
        this.playerName = playerName;
        this.rank = rank;
        this.wins = wins;
        this.losses = losses;
        this.streak = streak;
    }
    
}
