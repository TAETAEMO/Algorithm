/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let dp = [];
  
  if (s1 === "") {
    return s2 === s3;
  }
  if (s2 === "") {
    return s1 === s3;
  }
  
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  
  for (let i = 0; i < s1.length + 1; i++) {
    dp.push([]);
    for (let j = 0; j < s2.length + 1; j++) {
      if (i === 0 && j === 0) {
        dp[i].push(true);
      }
      else {
        let char = s3.charAt(i + j - 1);
        if (char === s1.charAt(i - 1) && dp[i -1][j]) {
          dp[i].push(true);
        }
        else if (char === s2.charAt(j - 1) && dp[i][j - 1]) {
          dp[i].push(true);
        }
        else {
          dp[i].push(false);
        }
      }
    }
  }
  return dp[s1.length][s2.length];
};