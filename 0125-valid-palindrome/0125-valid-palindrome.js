/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
    let reversed = arr.split("").reverse().join("");
    
    return arr === reversed;
};