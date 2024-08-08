/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    
    let minWidth = m, minHeight = n;
    
    for(let op of ops){
        minWidth = Math.min(op[0], minWidth)
        minHeight = Math.min(op[1], minHeight);
    }
    
    return minWidth * minHeight;
};