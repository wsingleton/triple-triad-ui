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
    isStolen: boolean;
    inPlay: boolean;
    isSelected: boolean;

    constructor(
        id: string, name: string, 
        tRank: number, rRank: number, 
        bRank: number, lRank: number, 
        obImg: string, element?: Element,
        inPlay?: boolean, isStolen?: boolean, 
        isSelected?: boolean) 
    {
        this.id = id;
        this.name = name;
        this.topRank = tRank;
        this.rightRank = rRank;
        this.bottomRank = bRank;
        this.leftRank = lRank;
        this.obverseImage = obImg;
        this.element = element || Element.NONE;
        this.inPlay = inPlay || false;
        this.isStolen = isStolen || false;
        this.isSelected = isSelected || false;
    }

    get currentState() {

        if (this.inPlay) {
            return this.isStolen ? 'stolen' : 'default';
        } else {
            return this.isSelected ? 'selected' : 'unselected';
        }
        
    }

    get reverseImage() {
        return 'assets/cards/card-reversed.png';
    }

    get owner() {
        return this.isStolen ? 'opponent' : 'player';
    }   

}
