/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (fns) {
    return function (e) {
        let an = e;
        for (let i = fns.length - 1; i >= 0; i--) {
            an = fns[i](an);
        }
        return an;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */