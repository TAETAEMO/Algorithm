/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numToIndexMap) {
            return [numToIndexMap[complement], i];
        }
        numToIndexMap[nums[i]] = i;
    }

    return null;
};

// function twoSum(nums, target) {
//     const numToIndexMap = {}; // 숫자와 해당 인덱스를 저장할 객체

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // 현재 숫자와 합해서 target이 되는 수
//         if (complement in numToIndexMap) {
//             // complement가 이미 저장된 숫자라면 해당 숫자의 인덱스와 현재 인덱스를 반환
//             return [numToIndexMap[complement], i];
//         }
//         // complement가 아직 저장되지 않았다면 현재 숫자와 인덱스를 저장
//         numToIndexMap[nums[i]] = i;
//     }
//     return null;
// }


// function twoSum(nums, target) {
//     const numToIndexMap = new Map(); // 숫자와 해당 인덱스를 저장할 Map 객체

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i]; // 현재 숫자와 합해서 target이 되는 수
//         if (numToIndexMap.has(complement)) {
//             // complement가 이미 저장된 숫자라면 해당 숫자의 인덱스와 현재 인덱스를 반환
//             return [numToIndexMap.get(complement), i];
//         }
//         // complement가 아직 저장되지 않았다면 현재 숫자와 인덱스를 Map에 저장
//         numToIndexMap.set(nums[i], i);
//     }
//     return null;
// }

// * in 연산자
// * has 메서드