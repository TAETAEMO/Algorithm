/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
      return false;
    }
    const strX = x.toString();
    const len = strX.length;

    for (let i = 0; i < Math.floor(len/2); i++){
        if (strX[i] !== strX[len - 1 - i]) {
            return false;
        }
    }

    return true;

};
//toString 메서드
//Math.floor 함수
//정수를 문자열로 변환하지 않고 문제푸는거 숙제