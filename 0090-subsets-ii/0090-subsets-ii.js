/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const output = [];
    nums.sort((a,b)=>a-b)
    
    function createSubsets(start, list){
        if(start>nums.length) return;
        output.push([...list]);
        
        for(let i = start;i<nums.length;i++){
            if(i> start && nums[i-1] === nums[i]){
               continue;
            }
            list.push(nums[i]);
            createSubsets(i+1, list);
            list.pop();
        }
    }
    
    createSubsets(0, []);
    return output;
};