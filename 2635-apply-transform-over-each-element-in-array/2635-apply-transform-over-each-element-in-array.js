/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (a, fn) {
    let an = new Array(a.length);
    a.forEach((e, i) => {
        an[i] = fn(e, i);
    });
    return an;
};