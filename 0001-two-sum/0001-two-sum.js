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

//     // 솔루션이 반드시 존재하므로 여기까지 오면 안됩니다.
//     return null;
// }