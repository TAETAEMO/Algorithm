/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const map = {};

    for (const val of this) {
        const key = fn(val);

        if (map[key] === undefined) {
            map[key] = [ val ];
        } else {
            map[key].push(val);
        }
    }

    return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */