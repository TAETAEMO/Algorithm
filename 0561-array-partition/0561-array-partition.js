/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = nums => {
    nums.sort((a, b) => a - b);
    let sum = 0;

    console.log(nums.sort((a, b) => a - b));

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += nums[i];
            console.log(nums[i]);
        }
    }

    console.log(sum);
    return sum
};