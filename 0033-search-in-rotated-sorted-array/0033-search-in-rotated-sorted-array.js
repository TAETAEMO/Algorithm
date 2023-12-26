/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let middle = Math.floor((start + end) / 2);

        if(nums[middle] === target){
            return middle;
        }

        if(nums[start] <= nums[middle]){
            if(nums[start] <= target && target < nums[middle]){
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {
            if(nums[middle] <= target && target <= nums[end]){
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }


    return -1;
};