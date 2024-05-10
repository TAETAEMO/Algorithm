/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = (arr, fn) => arr.sort((b, a) => fn(b) - fn(a));