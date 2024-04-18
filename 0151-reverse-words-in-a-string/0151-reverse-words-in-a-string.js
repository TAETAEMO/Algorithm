/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArr = []
    s = s.split(' ').reverse()
    s.forEach((w) => {
        if(w != ''){
            wordArr.push(w)
        }
    })
    
    return wordArr.join(" ")

};