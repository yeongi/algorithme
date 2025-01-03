/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    if (i > 0) nums[i] += nums[i - 1];
    if (sum - nums[i] <= sum / 2) res += 1;
  }
  return res;
};
