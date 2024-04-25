/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let bucketNum = nums.length;// 几个数字几个桶
    let bucketSize = (max - min) / (bucketNum - 1);// 平均分配每个桶
    
    let bucketMax = new Array(bucketNum).fill(-Infinity);
    let bucketMin = new Array(bucketNum).fill(Infinity);
    
    for (let i = 0; i < bucketNum; ++i) {
        let index = Math.floor((nums[i] - min) / bucketSize);// 数字分别放入桶
        bucketMax[index] = Math.max(bucketMax[index], nums[i]);
        bucketMin[index] = Math.min(bucketMin[index], nums[i]);
    }
    let preMax = min;
    let res = 0;
    for (let i = 0; i < bucketNum; ++i) {// 计算最大间距桶
        if (bucketMax[i] === -Infinity || bucketMin[i] === Infinity) continue;
        res = Math.max(res, bucketMin[i] - preMax);
        preMax = bucketMax[i];
    }
    return res;
};