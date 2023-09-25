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

/*
function isValid(s) {
  const stack = [];
  const bracketMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (bracketMap[char]) {
      // 여는 괄호인 경우, 스택에 추가합니다
      stack.push(char);
    } else {
      // 닫는 괄호인 경우
      const lastOpenBracket = stack.pop();
      if (char !== bracketMap[lastOpenBracket]) {
        return false;  // 일치하지 않는 닫는 괄호
      }
    }
  }

  // 남은 여는 괄호가 있는지 확인합니다
  return stack.length === 0;
}
*/