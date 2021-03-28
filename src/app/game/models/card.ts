export class Card {

    id: string;
    name: string;
    topRank: number;
    rightRank: number;
    bottomRank: number;
    leftRank: number;
    obverseImage: string;
    reverseImage = 'assets/cards/card-reversed.png';
    isStolen = false;
    inPlay = false;
    currentState = 'default';

    constructor(id: string, name: string, tRank: number, rRank: number, bRank: number, lRank: number, obImg: string, inPlay?: boolean) {
        this.id = id;
        this.name = name;
        this.topRank = tRank;
        this.rightRank = rRank;
        this.bottomRank = bRank;
        this.leftRank = lRank;
        this.obverseImage = obImg;
        this.inPlay = inPlay || false;
    }

}
