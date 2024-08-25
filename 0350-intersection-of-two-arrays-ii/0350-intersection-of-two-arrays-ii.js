/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    let result = [];

    for (let i = nums1.length-1; i >= 0; i--) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums1.splice(i, 1);
                nums2.splice(j, 1);
            }
        }
    }

    return result;
};