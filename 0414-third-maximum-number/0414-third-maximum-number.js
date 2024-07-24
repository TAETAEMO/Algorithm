/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let nums2 = [...new Set(nums)]
    if(nums2.length < 3) return Math.max(...nums2)
    nums2.splice(nums2.indexOf(Math.max(...nums2)), 1)
    nums2.splice(nums2.indexOf(Math.max(...nums2)), 1)
    return Math.max(...nums2)
};