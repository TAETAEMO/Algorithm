/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let l = 0, r = m * n - 1;
    let f = Math.floor;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let elem = matrix[f(mid/n)][mid % n];
        if (elem === target) return true;
        else if (elem < target) l = mid + 1;
        else if (elem > target) r = mid - 1;
    }
    return false;
};