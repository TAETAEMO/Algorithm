/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = nums => {   
  let result = 0
  let anchor = 0

  for (let i=0; i < nums.length; i++) {
      if (i > 0 &&
          nums[i-1] >= nums[i]
      ) {
          anchor = i
      }

      const currentResult = i - anchor + 1

      result = Math.max(result, currentResult)
  }

  return result
}