/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let obj = {};
    for (let i=0; i<nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
    }
    for (key in obj) {
        if (obj[key] === 1) return key;
    }
    
};