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
import LH3046 from './lh_3046.svg';
import LH3048 from './lh_3048.svg';
import LH3052 from './lh_3052.svg';
import LH3053 from './lh_3053.svg';
import LH3054 from './lh_3054.svg';
import LH3055 from './lh_3055.svg';
import LH3057 from './lh_3057.svg';
import LH3058 from './lh_3058.svg';
import LH3059 from './lh_3059.svg';
import LH3060 from './lh_3060.svg';
import LH3061 from './lh_3061.svg';
import LH3062 from './lh_3062.svg';
import LH3063 from './lh_3063.svg';
import LH3064 from './lh_3064.svg';
import LH3070 from './lh_3070.svg';
import LH3071 from './lh_3071.svg';
import LH3072 from './lh_3072.svg';
import LH3100 from './lh_3100.svg';
import LH3101 from './lh_3101.svg';
import LH3102 from './lh_3102.svg';
import LH3103 from './lh_3103.svg';
import LH3104 from './lh_3104.svg';
import LH3105 from './lh_3105.svg';
import LH3107 from './lh_3107.svg';
import LH3108 from './lh_3108.svg';
import LH3110 from './lh_3110.svg';
import LH3111 from './lh_3111.svg';
import LH3112 from './lh_3112.svg';
import LH3114 from './lh_3114.svg';
import LH3116 from './lh_3116.svg';
import LH3119 from './lh_3119.svg';
import LH3120 from './lh_3120.svg';
import LH3121 from './lh_3121.svg';
import LH3129 from './lh_3129.svg';
import LH3130 from './lh_3130.svg';
import LH3137 from './lh_3137.svg';
import LH3139 from './lh_3139.svg';
import LH3150 from './lh_3150.svg';
import LH3152 from './lh_3152.svg';
import LH3154 from './lh_3154.svg';
import LH3155 from './lh_3155.svg';
import LH3156 from './lh_3156.svg';
import LH3158 from './lh_3158.svg';
import LH3165 from './lh_3165.svg';
import LH3167 from './lh_3167.svg';
import LH3168 from './lh_3168.svg';
import LH3169 from './lh_3169.svg';
import LH3170 from './lh_3170.svg';
import LH3171 from './lh_3171.svg';
import LH3172 from './lh_3172.svg';
import LH3175 from './lh_3175.svg';
import LH3176 from './lh_3176.svg';
import LH3177 from './lh_3177.svg';
import LH3178 from './lh_3178.svg';
import LH3180 from './lh_3180.svg';
import LH3182 from './lh_3182.svg';
import LH3183 from './lh_3183.svg';
import LH3184 from './lh_3184.svg';
import LH3185 from './lh_3185.svg';
import LH3189 from './lh_3189.svg';
import LH3191 from './lh_3191.svg';
import LH3192 from './lh_3192.svg';
import LH3193 from './lh_3193.svg';
import LH3194 from './lh_3194.svg';
import LH3195 from './lh_3195.svg';
import LH3198 from './lh_3198.svg';

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
    {img: LH3046, code: 'LH 3046', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3048, code: 'LH 3048', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3052, code: 'LH 3052', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3053, code: 'LH 3053', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3054, code: 'LH 3054', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3055, code: 'LH 3055', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3057, code: 'LH 3057', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3058, code: 'LH 3058', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3059, code: 'LH 3059', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3060, code: 'LH 3060', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3061, code: 'LH 3061', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3062, code: 'LH 3062', type: 'ROTATION', size: 20, numColors: 3},
    {img: LH3063, code: 'LH 3063', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3064, code: 'LH 3064', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3070, code: 'LH 3070', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3071, code: 'LH 3071', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3072, code: 'LH 3072', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3100, code: 'LH 3100', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3101, code: 'LH 3101', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3102, code: 'LH 3102', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3103, code: 'LH 3103', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3104, code: 'LH 3104', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3105, code: 'LH 3105', type: 'NORMAL', size: 20, numColors: 4},
    {img: LH3107, code: 'LH 3107', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3108, code: 'LH 3108', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3110, code: 'LH 3110', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3111, code: 'LH 3111', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3112, code: 'LH 3112', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3114, code: 'LH 3114', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3116, code: 'LH 3116', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3119, code: 'LH 3119', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3120, code: 'LH 3120', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3121, code: 'LH 3121', type: 'REFLECTIVE', size: 20, numColors: 5},
    {img: LH3129, code: 'LH 3129', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3130, code: 'LH 3130', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3137, code: 'LH 3137', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3139, code: 'LH 3139', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3150, code: 'LH 3150', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3152, code: 'LH 3152', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3154, code: 'LH 3154', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3155, code: 'LH 3155', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3156, code: 'LH 3156', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3158, code: 'LH 3158', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3165, code: 'LH 3165', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3167, code: 'LH 3167', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3168, code: 'LH 3168', type: 'ROTATION', size: 20, numColors: 2},
    {img: LH3169, code: 'LH 3169', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3170, code: 'LH 3170', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3171, code: 'LH 3171', type: 'ROTATION', size: 20, numColors: 3},
    {img: LH3172, code: 'LH 3172', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3175, code: 'LH 3175', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3176, code: 'LH 3176', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3177, code: 'LH 3177', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3178, code: 'LH 3178', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3180, code: 'LH 3180', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3182, code: 'LH 3182', type: 'REFLECTIVE', size: 20, numColors: 4},
    {img: LH3183, code: 'LH 3183', type: 'REFLECTIVE', size: 20, numColors: 3},
    {img: LH3184, code: 'LH 3184', type: 'NORMAL', size: 20, numColors: 2},
    {img: LH3185, code: 'LH 3185', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3189, code: 'LH 3189', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3191, code: 'LH 3191', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3192, code: 'LH 3192', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3193, code: 'LH 3193', type: 'NORMAL', size: 20, numColors: 3},
    {img: LH3194, code: 'LH 3194', type: 'REFLECTIVE', size: 20, numColors: 6},
    {img: LH3195, code: 'LH 3195', type: 'REFLECTIVE', size: 20, numColors: 2},
    {img: LH3198, code: 'LH 3198', type: 'REFLECTIVE', size: 20, numColors: 3},
];

export default tiles;