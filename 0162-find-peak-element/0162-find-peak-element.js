/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1){
        return 0;
    }

    if(nums.length === 2){
        return nums[0] > nums[1] ? 0 : 1;
    }

    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(start < end){
        if(nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1]){
            return middle;
        }

        if(nums[middle - 1] < nums[middle]){
            start = middle + 1;
        } else {
            end = middle;
        }

        middle = Math.floor((start + end) / 2);
    }

    return start;
};