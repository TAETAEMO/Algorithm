/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        let carry = 0;
        for (let j = len2 - 1; j >= 0; j--) {
            const tempSum = (parseInt(num1[i]) * parseInt(num2[j])) + result[i + j + 1] + carry;
            result[i + j + 1] = tempSum % 10;
            carry = Math.floor(tempSum / 10);
        }

        result[i] += carry;
    }

    // Remove leading zeros
    const resultStr = result.join('').replace(/^0+/, '');
    return resultStr.length === 0 ? '0' : resultStr;
};
