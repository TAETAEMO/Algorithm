/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  return candyType.length / 2 > new Set(candyType).size
    ? new Set(candyType).size
    : candyType.length / 2;
};