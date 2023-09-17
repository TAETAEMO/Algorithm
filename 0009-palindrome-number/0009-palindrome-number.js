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

/*
function isPalindrome(x) {
    // 음수이거나 10의 배수인 경우는 회문이 아님
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let reversedNumber = 0;
    let originalNumber = x;

    // 숫자 뒤집기
    while (x > 0) {
        const digit = x % 10;
        reversedNumber = reversedNumber * 10 + digit;
        x = Math.floor(x / 10);
    }

    // 원래 숫자와 뒤집은 숫자 비교
    return originalNumber === reversedNumber;
}

예시
x (원래 숫자): 123
reversedNumber (뒤집은 숫자): 0
originalNumber (원래 숫자의 복사본): 123
첫 번째 반복:

digit (맨 끝 자리 숫자): 3 (123을 10으로 나눈 나머지)
reversedNumber 갱신: 0 * 10 + 3 = 3
x 갱신: Math.floor(123 / 10) = 12 (다음 자리로 이동)
두 번째 반복:

digit: 2 (12를 10으로 나눈 나머지)
reversedNumber 갱신: 3 * 10 + 2 = 32
x 갱신: Math.floor(12 / 10) = 1 (다음 자리로 이동)
세 번째 반복:

digit: 1 (1을 10으로 나눈 나머지)
reversedNumber 갱신: 32 * 10 + 1 = 321
x 갱신: Math.floor(1 / 10) = 0 (더 이상 자리가 없음)
루프 종료:

x가 0이므로 루프 종료
*/