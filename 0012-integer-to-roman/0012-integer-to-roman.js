/**
 * @param {number} num
 * @return {string}
 */
const ROMAN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

var intToRoman = function(num) {
    let str = '';
    for (let s of Object.keys(ROMAN)) {
        const r = Math.floor(num / ROMAN[s]);
        num -= r * ROMAN[s];
        str += s.repeat(r);
    }
    return str;
};