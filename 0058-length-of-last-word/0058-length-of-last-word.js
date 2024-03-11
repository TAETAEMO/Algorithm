/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  let tString = s.trim().split(' ')

  return tString[tString.length-1].length  

};
