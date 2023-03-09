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
import LH3022 from './lh_3022.svg';
import LH3023 from './lh_3023.svg';
import LH3024 from './lh_3024.svg';
import LH3025 from './lh_3025.svg';
import LH3026 from './lh_3026.svg';
import LH3027 from './lh_3027.svg';
import LH3030 from './lh_3030.svg';
import LH3031 from './lh_3031.svg';
import LH3032 from './lh_3032.svg';
import LH3034 from './lh_3034.svg';
import LH3035 from './lh_3035.svg';
import LH3037 from './lh_3037.svg';
import LH3039 from './lh_3039.svg';
import LH3040 from './lh_3040.svg';
import LH3041 from './lh_3041.svg';
import LH3042 from './lh_3042.svg';
import LH3043 from './lh_3043.svg';
import LH3044 from './lh_3044.svg';
import LH3045 from './lh_3045.svg';

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
    {img: LH3022, code: 'LH 3022', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3023, code: 'LH 3023', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3024, code: 'LH 3024', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3025, code: 'LH 3025', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3026, code: 'LH 3026', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3027, code: 'LH 3027', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3030, code: 'LH 3030', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3031, code: 'LH 3031', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3032, code: 'LH 3032', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3034, code: 'LH 3034', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3035, code: 'LH 3035', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3037, code: 'LH 3037', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3039, code: 'LH 3039', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3040, code: 'LH 3040', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3041, code: 'LH 3041', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3042, code: 'LH 3042', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3043, code: 'LH 3043', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3044, code: 'LH 3044', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3045, code: 'LH 3045', type: 'NORMAL', size: 20, numColors: 2},
];

export default tiles;