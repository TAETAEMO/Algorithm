/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const swap = (arr, a, b) => [ arr[a], arr[b] ] = [ arr[b], arr[a] ]
    
    let i = nums.length -2
    while(0 <= i && nums[i] >= nums[i+1]) i--
    
    if (0 <= i) {
        let j = nums.length-1
        while(nums[i] >= nums[j]) j--
        swap(nums, i, j)
    }
    nums.push(...nums.splice(i+1).reverse())
};