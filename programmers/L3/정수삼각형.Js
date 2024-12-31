function solution(triangle) {
  const n = triangle.length;

  // i는 i번째의 최댓값
  const dp = new Array({ length: triangle.length });

  dp[0] = {
    value: triangle[0][0],
    index: 0,
  };

  for (let i = 1; i < triangle.length; i++) {
    const prevIndex = dp[i - 1].index;
    const cur = [triangle[i][prevIndex], triangle[i][prevIndex + 1]];
    const max = Math.max(...cur);

    dp[i] = {
      value: max + dp[i - 1].value,
      index: triangle[i].findIndex((a) => a === max),
    };
  }

  console.log("dp", dp);

  return dp[triangle.length - 1].value;
}
// 위에서 부터 접근했는데 정확한 계산을 못했음.

// 아래에서 부터 접근하니까 정확한 계산을 할 수 있었음.
function solution(triangle) {
  const height = triangle.length;

  // 맨 아래층부터 위로 올라가며 각 위치의 최대 합을 계산
  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  // 삼각형의 꼭대기 값이 최대 합
  return triangle[0][0];
}
