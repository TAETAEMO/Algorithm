/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let globalMaxProduct = nums[0];

  for (let i = 0; i < nums.length; i++) {

    let localMaxProduct = 1;
    for (let j = i; j < nums.length; j++) {
      localMaxProduct *= nums[j];

      if (localMaxProduct > globalMaxProduct) {
        globalMaxProduct = localMaxProduct;
      }
    }
  }

  return globalMaxProduct;
}