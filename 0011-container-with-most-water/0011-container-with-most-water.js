/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length;
    let toRight = 0;
    let toLeft = n-1;
    let answer = 0;
    
    while(toRight < toLeft){
        const val = (toLeft - toRight) * min(height[toRight], height[toLeft]);
        answer = val > answer ? val : answer;
        
        if(height[toLeft] < height[toRight]){
            const curLeft = height[toLeft];
            while(toLeft >= 0 && height[toLeft] <= curLeft){
                toLeft--;
            }
        }else{
            const curRight = height[toRight];
            while(toRight < n && height[toRight] <= curRight){
                toRight++;
            }
        }               
    }
    
    return answer;
};

const min = (a, b) => a < b ? a : b;

//1. 변수 초기화(toRight = 0, toLeft = n-1)
// 2. while(toRight < toLeft)
//   2-1. toRight, toLeft 기반 넓이값 계산하여 answer값 비교 및 갱신
//   2-2. toRight, toLeft 의 높이를 비교하여, 더 낮은 값의 포인터 이동
//   2-3. 포인터 이동시, 기존보다 높은 높이가 나올 때까지 이동