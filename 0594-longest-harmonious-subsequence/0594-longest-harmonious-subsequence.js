/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var hash={};
    var max=0;
    nums.forEach((one,index)=>{
        if(hash[one]!=undefined){
           hash[one]++;
           }else{
               hash[one]=1;
           }
        if(hash[one]+hash[one+1]>max){
            max=hash[one]+hash[one+1]
        }
        if(hash[one]+hash[one-1]>max){
           max=hash[one]+hash[one-1]
           }
    })
    return max;
};