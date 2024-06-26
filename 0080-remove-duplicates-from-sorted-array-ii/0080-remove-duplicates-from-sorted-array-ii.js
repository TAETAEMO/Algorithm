/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for(let i = 0; i < nums.length; i++){
        const firstIndex = nums.indexOf(nums[i]);
        const lastIndex = nums.lastIndexOf(nums[i]);

        if(lastIndex === firstIndex){
            continue;
        }

        if(lastIndex - firstIndex === 1){
            i++;
          	continue;
        }


        if(lastIndex - firstIndex >= 2){
            nums.splice(firstIndex + 2, lastIndex - (firstIndex + 1));
            i++;
        }
    }

    return nums.length;
};