/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const operate = (min, nums) => {
    const firstIndexOfMin = nums.findIndex((a) => a === min);
    if (firstIndexOfMin === -1) return;
    nums[firstIndexOfMin] *= multiplier;
  };

  for (let i = 1; i <= k; i++) {
    const min = Math.min(...nums);
    operate(min, nums);
  }

  return nums;
};
