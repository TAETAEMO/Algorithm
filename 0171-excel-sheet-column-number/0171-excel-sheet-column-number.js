/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (s) {
  let answer = 0;

  let arr = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  for (let i = 0; i < s.length; i++) {
    answer += (arr.indexOf(s[i]) + 1) * Math.pow(26, s.length - i - 1);
  }

  return answer;
};