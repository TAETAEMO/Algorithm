/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 ){
        return s;
    }
    // 사이클의 크기 계산
    const cycleSize =  2 * numRows - 2;
    const arr = new Array(numRows).fill('');
    // 사이클에 맞게 각 배열에 문자 삽입
    for (let i=0; i<s.length; i++){
        let cycleIdx = i % cycleSize;
        let rIdx = (cycleIdx < numRows) ? cycleIdx : 2 * numRows - cycleIdx - 2;
        arr[rIdx] += s[i]; 
    }
    return arr.join('');
};