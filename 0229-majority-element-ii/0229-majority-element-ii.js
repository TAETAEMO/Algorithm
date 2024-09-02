/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = nums => {
  if (nums.length === 0) {
    return [];
  }

  let candidateA,
    candidateB,
    countA = 0,
    countB = 0;

  for (let index = 0; index < nums.length; index++) {
    if (candidateA === nums[index]) {
      countA++;
    } else if (candidateB === nums[index]) {
      countB++;
    } else if (countA === 0) {
      candidateA = nums[index];
      countA = 1;
    } else if (countB === 0) {
      candidateB = nums[index];
      countB = 1;
    } else {
      countA--;
      countB--;
    }
  }

  const elementCount = search => {
    return nums.reduce((count, element) => {
      return element === search ? count + 1 : count;
    }, 0);
  };

  return candidateA === candidateB
    ? [candidateA]
    : [candidateA, candidateB].filter(
        (element, index) => elementCount(element) > Math.floor(nums.length / 3)
      );
};