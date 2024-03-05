/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(!nums || nums.length===0) return false;
    
    let lastValidIndex=nums.length-1; 
    
    for(let curIndex=nums.length-2; curIndex>=0; curIndex--){
        if(nums[curIndex]>=lastValidIndex-curIndex){
            lastValidIndex=curIndex;
        }
    }
    
    return lastValidIndex===0;
    
};