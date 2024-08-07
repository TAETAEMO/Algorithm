/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let answer = {};
    return function(...args) {
        const argsString = args.join(".");
        const cacheValue = answer[argsString]
        if(cacheValue != undefined) {
            return cacheValue;
        }
        return answer[argsString] = fn(...args);
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */