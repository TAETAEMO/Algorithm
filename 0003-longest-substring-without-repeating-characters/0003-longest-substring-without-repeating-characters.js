/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0, length = 0;
    let stringMap = new Map();
    while (right < s.length) {
        if (stringMap.has(s[right])) {
            left = Math.max(stringMap.get(s[right]) + 1, left);
        }
        stringMap.set(s[right], right);
        length = Math.max(right - left + 1 , length);
        right++;
    }
    return length;
};