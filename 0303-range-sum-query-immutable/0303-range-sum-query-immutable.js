/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var sum = 0, map = [0];
    for(var i = 1; i <= nums.length; i++){
        sum += nums[i - 1];
        map[i] = sum;
    }
    this.map = map;
};


/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var map = this.map;
    return map[j + 1] - map[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */