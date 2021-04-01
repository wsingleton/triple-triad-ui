import { Card } from "./card";

describe('Card', () => {

  it('should return a state of "default" when isStolen is false', () => {
    let card1 = new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true);
    let card2 = new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true, false);
    let card3 = new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true, true);
    card3.isStolen = false;
    expect(card1.currentState).toBe('default');
    expect(card2.currentState).toBe('default');
    expect(card3.currentState).toBe('default');
  });

  it('should return a state of "stolen" when isStolen is true', () => {
    let card1 = new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true, true);
    let card2 = new Card('jshhe93rhi', 'Geezard', 9, 10, 6, 2, 'assets/cards/level-1/g1_geezard-card.png', true);
    card2.isStolen = true;

    expect(card1.currentState).toBe('stolen');
    expect(card2.currentState).toBe('stolen');
  });

});
