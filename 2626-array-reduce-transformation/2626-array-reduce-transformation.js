/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (a, fn, init) {
    if (!a.length) return init;

    let acc = init; // accumulator can be sum, etc
    for (let e of a) {
        acc = fn(acc, e);
    }
    return acc;
};