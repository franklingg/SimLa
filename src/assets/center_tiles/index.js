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
import LH3012 from './lh_3012.svg';
import LH3013 from './lh_3013.svg';
import LH3014 from './lh_3014.svg';
import LH3015 from './lh_3015.svg';
import LH3016 from './lh_3016.svg';
import LH3017 from './lh_3017.svg';
import LH3018 from './lh_3018.svg';
import LH3019 from './lh_3019.svg';
import LH3020 from './lh_3020.svg';
import LH3021 from './lh_3021.svg';

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
    {img: LH3012, code: 'LH 3012', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3013, code: 'LH 3013', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3014, code: 'LH 3014', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3015, code: 'LH 3015', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3016, code: 'LH 3016', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3017, code: 'LH 3017', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3018, code: 'LH 3018', type: 'ROTATION', size: 20, numColors: 3},
    {img: LH3019, code: 'LH 3019', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3020, code: 'LH 3020', type: 'ROTATION', size: 20, numColors: 2},
    {img: LH3021, code: 'LH 3021', type: 'NORMAL', size: 20, numColors: 4},
];

export default tiles;