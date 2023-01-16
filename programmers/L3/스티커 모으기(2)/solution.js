function solution(sticker) {
  // 1. 첫번째 스티커 부터 때어내기
  // 2. i번째 스티커 부터 때기
  // DP배열에 i 번째 최대값이 나온다고 정하면
  // DP[i] = max 에서 i번째 스티커를 때면 최댓값 max가 나온다는 뜻이다.
  // i 번째 스티커를 뜯었다는 i-1 번재 와 i+1 번째 스티커는 뜯지 못한다란 뜻이다.
  // 그렇다면 DP[a] 는 DP[a-2] + stricker[a] 가 될것이다.
  let answer = 0;
  const DP = Array.from({ length: sticker.length });
  const isBig = (a, b) => {
    if (a > b) return a;
    return b;
  };

  if (sticker.length === 1) return sticker[0];

  DP[0] = sticker[0];
  DP[1] = sticker[0];

  for (let i = 2; i < sticker.length; i += 1) {
    DP[i] = isBig(DP[i - 2] + sticker[i], DP[i - 1]);
  }

  answer = isBig(DP[sticker.length - 2], answer);

  DP[0] = 0;
  DP[1] = sticker[1];

  for (let i = 2; i < sticker.length; i += 1) {
    DP[i] = isBig(DP[i - 2] + sticker[i], DP[i - 1]);
  }

  answer = isBig(DP[sticker.length - 1], answer);

  return answer;
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
