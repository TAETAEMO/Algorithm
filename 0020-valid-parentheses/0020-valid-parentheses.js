/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = true;
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            let s_key = stack.pop();
            if (s[i] !== map[s_key]) 
                result = false;
            }
        }
    if (stack.length !== 0) 
        result = false;
    return result;
};