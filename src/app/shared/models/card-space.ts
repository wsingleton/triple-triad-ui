import { Card } from "./card";
import { Element } from "./element";
import { Player } from "./player";
import { SpaceType } from "./space-type";

export class CardSpace {

    positionId!: string;
    element!: Element;
    cardData: Card | undefined;
    owner: Player | undefined;

    constructor(positionId: string, element: Element = Element.NONE, cardData?: Card, owner?: Player) {
        this.positionId = positionId;
        this.element = element;
        this.cardData = cardData;
        this.owner = owner;
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
    
}