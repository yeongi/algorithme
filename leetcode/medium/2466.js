var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7;
  // 길이가 i 인 좋은 문자열
  const dp = new Array(high + 1).fill(0);

  dp[0] = 1;
  // 점화식을 정의하는데
  // 길이가 i 인 좋은 문자열은 길이가 i-zero 인 좋은 문자열 뒤에 0을 붙인 것과
  // 길이가 i-one 인 좋은 문자열 뒤에 1을 붙인 것이다.
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
  }

  console.log("dp", dp);

  let result = 0;
  for (let i = low; i <= high; i++) {
    result = (result + dp[i]) % MOD;
  }

  return result;
};
