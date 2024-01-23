/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const data = {};
  const result = [];
  for(let str of strs) {
    const word = str.split('').sort().join(''); 
    if (!data[word]) data[word] = []; 
    data[word].push(str);
  }
  for(let key in data) {
    result.push(data[key]); // 반환할 값을 만든다.
  }
  return result;
};