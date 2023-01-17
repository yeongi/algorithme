/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const len = nums.length;
  const dp = Array.from({ length: len });
  const isBig = (a, b) => {
    return a > b ? a : b;
  };
  let answser = 0;
  // dp[i] 를 i번째 까지 최대로 훔친 값으로 정의
  //i번째를 훔치면 i-1과 i+1은 훔치지 못하므로
  // dp[i] 는 dp[i-2] + nums[i] 와 dp[i-1]과 비교 해서 더 큰값을 넣으면 된다.

  // robbing fist home
  dp[0] = nums[0];
  dp[1] = nums[0];
  for (let i = 2; i < len; i++) {
    dp[i] = isBig(dp[i - 2] + nums[i], dp[i - 1]);
  }

  answser = dp[len - 1];

  // robbing second home
  dp[0] = 0;
  dp[1] = nums[1];
  for (let i = 2; i < len; i++) {
    dp[i] = isBig(dp[i - 2] + nums[i], dp[i - 1]);
  }

  answser = isBig(answser, dp[len - 1]);

  return answser;
};

console.log(rob([2, 7, 9, 3, 1]));
