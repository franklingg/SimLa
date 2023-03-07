import LH3001 from './lh_3001.svg';
import LH3002 from './lh_3002.svg';
import LH3003 from './lh_3003.svg';
import LH3004 from './lh_3004.svg';
import LH3005 from './lh_3005.svg';
import LH3006 from './lh_3006.svg';
import LH3008 from './lh_3008.svg';
import LH3009 from './lh_3009.svg';
import LH3010 from './lh_3010.svg';
import LH3011 from './lh_3011.svg';

// TILES HAVE THREE MAIN TYPES:
// 1. NORMAL: NO SEQUENCE, SIDE BY SIDE IS CORRECT
// 2. REFLECTIVE: 4 TILES MAKE A FIGURE BY REFLECTION FROM PREVIOUS
// 3. ROTATION: EACH TILE IS 90DEG ROTATED FROM PREVIOUS

const tiles = [
    {img: LH3001, code: 'LH 3001', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3002, code: 'LH 3002', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3003, code: 'LH 3003', type: 'ROTATION', size: 20, numColors: 3},
    {img: LH3004, code: 'LH 3004', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3005, code: 'LH 3005', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3006, code: 'LH 3006', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3008, code: 'LH 3008', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3009, code: 'LH 3009', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3010, code: 'LH 3010', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3011, code: 'LH 3011', type: 'NORMAL', size: 20, numColors: 3},
];

export default tiles;