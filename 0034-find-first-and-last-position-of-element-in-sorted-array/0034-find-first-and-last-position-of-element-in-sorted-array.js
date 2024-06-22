/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let [start,end] = [0,nums.length-1]
    let ans = [-1,-1]
    let mid = 0
    while(start < end) {
        mid = Math.floor((start+end)/2)
        if(nums[mid] < target) {
            start = mid+1
        } else {
            end = mid
        }
    }
    if(nums[start] != target) return ans
    ans[0] = start
    end = nums.length-1
    while(start < end) {
        mid = Math.floor((start+end)/2)+1
        if(nums[mid] > target) {
            end = mid-1
        } else {
            start = mid
        }
    }
    ans[1] = end
    return ans
};