import LH3001 from './lh_3001.svg';

// TILES HAVE THREE MAIN TYPES:
// 1. NORMAL: NO SEQUENCE, SIDE BY SIDE IS CORRECT
// 2. PAIR: EVEN TILES ARE 90* ROTATED
// 3. QUADRUPLE: 4 TILES MAKE A FIGURE

const tiles = [
    {img: LH3001, code: 'LH 3001', type: 'QUADRUPLE', size: 20, numColors: 2},
];

export default tiles;