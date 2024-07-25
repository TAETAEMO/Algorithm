/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var dict = {};
    for (var i = 0; i < nums.length; i++) {
        var char = nums[i];
        if (!dict.hasOwnProperty(char)) { 
            dict[char] = i;
        } else {
            var previousIndex = dict[char];
            var diff = i - previousIndex;
            if (diff <= k) {
                return true
            }
            dict[char] = i;
        }
    }
    return false;
};