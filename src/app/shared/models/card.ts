import { Element } from "./element";

export class Card {

    id: string;
    name: string;
    topRank: number;
    rightRank: number;
    bottomRank: number;
    leftRank: number;
    obverseImage: string;
    element: Element;

    constructor(
        id: string, name: string, 
        tRank: number, rRank: number, 
        bRank: number, lRank: number, 
        obImg: string, element: Element = Element.NONE) 
    {
        this.id = id;
        this.name = name;
        this.topRank = tRank;
        this.rightRank = rRank;
        this.bottomRank = bRank;
        this.leftRank = lRank;
        this.obverseImage = obImg;
        this.element = element;
    }

    get reverseImage() {
        return 'assets/cards/card-reversed.png';
    } 

}
