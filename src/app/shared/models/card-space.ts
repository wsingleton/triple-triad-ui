import { Card } from "./card";
import { Element } from "./element";
import { SpaceType } from "./space-type";

export class CardSpace {

    positionId!: string;
    element!: Element;
    cardData: Card | undefined;
    owner: 'opponent' | 'player' | 'vacant';
    isSelected: boolean;

    constructor(positionId: string, element?: Element, cardData?: Card, owner?: 'opponent' | 'player' | 'vacant', isSelected?: boolean) {
        this.positionId = positionId;
        this.element = element || Element.NONE;
        this.cardData = cardData;
        this.owner = owner || 'vacant';
        this.isSelected = isSelected || false;
    }

    get spaceType(): SpaceType {
        switch (this.positionId.substr(0, 1)) {
            case 'o': return SpaceType.OPPONENT_HAND;
            case 'p': return SpaceType.PLAYER_HAND;
            case 'f': return SpaceType.FIELD;
            default: throw Error('Cannot determine space type from position id!');
        }
    }

    get containsCard(): boolean {
        return !!this.cardData;
    }

    get position(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 {
        return <0|1|2|3|4|5|6|7|8>+this.positionId.substr(2, 1);
    }
    
}