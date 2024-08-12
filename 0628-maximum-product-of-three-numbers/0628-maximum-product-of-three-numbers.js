/**
 * @param {number[]} nums
 * @return {number}
 */
function sortAra(a, b) {
    return a - b;
}

function maximumProduct(nums) {
    nums.sort(sortAra);
    let len = nums.length - 1;
    let max1, max2;

    if (len === 2) {
        return nums[0] * nums[1] * nums[2];
    }

    max1 = nums[0] * nums[1] * nums[len];
    max2 = nums[len] * nums[len - 1] * nums[len - 2];

    if (max1 > max2) {
        return max1
    } else {
        return max2;
    }

}