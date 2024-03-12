/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache = {};
    
    let howManyWays = function(n) {
        if (n in cache) {
            return cache[n];
        }

        if (n < 4) {
            cache[n] = n;
            return cache[n];
        }
        
        cache[n] = (howManyWays(n - 1) + howManyWays(n - 2));
        return cache[n];
    }
    
    return howManyWays(n);
};