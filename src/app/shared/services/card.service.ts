import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Element } from '../models/element';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getPlayerCards(playerName: string): Card[] {
    return [
      new Card('l01.g001.n', 'Geezard', 1, 4, 1, 5, 'assets/cards/level-1/g1_geezard-card.png'),
      new Card('l01.g002.n', 'Funguar', 5, 1, 1, 3, 'assets/cards/level-1/g2_funguar-card.png'),
      new Card('l01.g003.n', 'Bite Bug', 1, 3, 3, 5, 'assets/cards/level-1/g3_bite-bug-card.png'),
      new Card('l01.g004.n', 'Red Bat', 6, 1, 1, 2, 'assets/cards/level-1/g4_red-bat-card.png'),
      new Card('l01.g005.n', 'Blobra', 2, 3, 1, 5, 'assets/cards/level-1/g5_blobra-card.png'),
      new Card('101.g006.t', 'Gayla', 2, 1, 4, 4, 'assets/cards/level-1/g6_gayla-card.png', Element.THUNDER),
      new Card('l01.g007.n', 'Gesper', 1, 5, 4, 1, 'assets/cards/level-1/g7_gesper-card.png'),
      new Card('l01.g008.e', 'Fastitocalon-F', 3, 5, 2, 1, 'assets/cards/level-1/g8_fastitocalon-f-card.png', Element.EARTH),
      new Card('l01.g009.n', 'Blood Soul', 2, 1, 6, 1, 'assets/cards/level-1/g9_blood-soul-card.png'),
      new Card('l01.g010.n', 'Caterchipillar', 4, 2, 4, 3, 'assets/cards/level-1/g10_caterchipillar-card.png'),
      new Card('l01.g011.t', 'Cockatrice', 2, 1, 2, 6, 'assets/cards/level-1/g11_cockatrice-card.png', Element.THUNDER),

      new Card('l02.g012.n', 'Grat', 7, 1, 3, 1, 'assets/cards/level-2/g12_grat-card.png'),
      new Card('l02.g013.n', 'Buel', 6, 2, 2, 3, 'assets/cards/level-2/g13_buel-card.png'),
      new Card('l02.g014.n', 'Mesmerize', 5, 3, 3, 4, 'assets/cards/level-2/g14_mesmerize-card.png'),
      new Card('l02.g015.i', 'Glacial Eye', 6, 1, 4, 3, 'assets/cards/level-2/g15_glacial-eye-card.png', Element.ICE),
      new Card('l02.g016.n', 'Belhelmel', 3, 3, 4, 5, 'assets/cards/level-2/g16_belhelmel-card.png'),
      new Card('l02.g017.wi', 'Thrustaevis', 5, 3, 2, 5, 'assets/cards/level-2/g17_thrustaevis-card.png', Element.WIND),
      new Card('l02.g018.p', 'Anacondaur', 5, 1, 3, 5, 'assets/cards/level-2/g18_anacondaur-card.png', Element.POISON),
      new Card('l02.g019.t', 'Creeps', 5, 2, 5, 2, 'assets/cards/level-2/g19_creeps-card.png', Element.THUNDER),
      new Card('l02.g020.t', 'Grendel', 4, 4, 5, 2, 'assets/cards/level-2/g20_grendel-card.png', Element.THUNDER),
      new Card('l02.g021.n', 'Jelleye', 3, 2, 1, 7, 'assets/cards/level-2/g21_jelleye-card.png'),
      new Card('l02.g022.n', 'Grand Mantis', 5, 2, 5, 3, 'assets/cards/level-2/g22_grand-mantis-card.png'),

      new Card('l03.g023.n', 'Forbidden', 6, 6, 3, 2, 'assets/cards/level-3/g23_forbidden-card.png'),
      new Card('l03.g024.e', 'Armadodo', 6, 3, 1, 6, 'assets/cards/level-3/g24_armadodo-card.png', Element.EARTH),
      new Card('l03.g025.p', 'Tri-Face', 3, 5, 5, 5, 'assets/cards/level-3/g25_tri-face-card.png', Element.POISON),
      new Card('l03.g026.e', 'Fastitocalon', 7, 5, 1, 3, 'assets/cards/level-3/g26_fastitocalon-card.png', Element.EARTH),
      new Card('l03.g027.i', 'Snow Lion', 7, 1, 5, 3, 'assets/cards/level-3/g27_snow-lion-card.png', Element.ICE),
      new Card('l03.g028.n', 'Ochu', 5, 6, 3, 3, 'assets/cards/level-3/g28_ochu-card.png'),
      new Card('l03.g029.f', 'SAM08G', 5, 6, 2, 4, 'assets/cards/level-3/g29_sam08g-card.png', Element.FIRE),
      new Card('l03.g030.f', 'Death Claw', 4, 4, 7, 2, 'assets/cards/level-3/g30_death-claw-card.png', Element.FIRE),
      new Card('l03.g031.n', 'Cactuar', 6, 2, 6, 3, 'assets/cards/level-3/g31_cactuar-card.png'),
      new Card('l03.g032.n', 'Tonberry', 3, 6, 4, 4, 'assets/cards/level-3/g32_tonberry-card.png'),
      new Card('l03.g033.e', 'Abyss Worm', 7, 2, 3, 5, 'assets/cards/level-3/g33_abyss-worm-card.png', Element.EARTH)
    
    ];
  }
}
