/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const n = nums.length;
    const map = new Map();
    let degree = 1;
    
    for (const num of nums) {
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
        
        degree = Math.max(degree, map.get(num));
    }
    
    map.clear();
    
    let minLen = n;
    let j = 0;
    
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
        
        while (j <= i && map.get(num) === degree) {
            minLen = Math.min(minLen, i - j + 1);
            map.set(nums[j], map.get(nums[j]) - 1);
            j++;
        }
    }
    
    return minLen;
};