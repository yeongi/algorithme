function solution(citations) {
  let h;

  citations.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i <= citations[citations.length - 1]; i++) {
    //모든 논문 중 n회 이상 인용된 논문이 n개 이상일 때,
    // 이 둘을 동시에 만족하는 n의 최대값으로 한다.
    if (
      i <=
      citations.reduce((acc, cur) => {
        if (cur >= i) {
          return acc + 1;
        }
        return acc;
      }, 0)
    )
      h = i;
  }

  return h;
}

console.log(solution([3, 0, 6, 1, 5]));
