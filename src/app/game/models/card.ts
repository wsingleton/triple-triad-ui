export class Card {

    id: string;
    name: string;
    topRank: number;
    rightRank: number;
    bottomRank: number;
    leftRank: number;
    obverseImage: string;
    isStolen: boolean;
    inPlay: boolean;

    constructor(id: string, name: string, tRank: number, rRank: number, bRank: number, lRank: number, obImg: string, inPlay?: boolean, isStolen?: boolean) {
        this.id = id;
        this.name = name;
        this.topRank = tRank;
        this.rightRank = rRank;
        this.bottomRank = bRank;
        this.leftRank = lRank;
        this.obverseImage = obImg;
        this.inPlay = inPlay || false;
        this.isStolen = isStolen || false;
    }

    get currentState() {
        return this.isStolen ? 'stolen' : 'default';
    }

    get reverseImage() {
        return 'assets/cards/card-reversed.png';
    }

    

}
