/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
    return '';
  }

  // 배열의 첫 번째 문자열을 기준으로 설정
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++;
    }
    
    // 현재까지의 prefix를 갱신
    prefix = prefix.substring(0, j);

    // 공통 접두사가 없으면 더 이상 비교할 필요 없음
    if (prefix === '') {
      return '';
    }
  }

  return prefix;
};