import LH3042 from './lh_3042.svg';
import LH3139 from './lh_3139.svg';
import LH3168 from './lh_3168.svg';
import LH3071 from './lh_3071.svg';

// TILES HAVE THREE MAIN TYPES:
// 1. NORMAL: NO SEQUENCE, SIDE BY SIDE IS CORRECT
// 2. PAIR: EVEN TILES ARE 90* ROTATED
// 3. QUADRUPLE: 4 TILES MAKE A FIGURE

const tiles = [
    {img: LH3042, code: 'LH 3042', type: 'NORMAL', size: 20},
    {img: LH3139, code: 'LH 3139', type: 'NORMAL', size: 20},
    {img: LH3168, code: 'LH 3168', type: 'PAIR', size: 20},
    {img: LH3071, code: 'LH 3071', type: 'QUADRUPLE', size: 20},
];

export default tiles;