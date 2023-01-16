const solution = (brown, yellow) => {
  const brWidth = [];
  let answer = [];

  let temp = yellow;

  //brWidth 구하기
  if (yellow === 1) {
    // 0 : 가로 1 : 세로
    brWidth.push([1, 1]);
  }

  while (temp > 0) {
    if (yellow % temp === 0) brWidth.push([temp, yellow / temp]);
    temp--;
  }
  console.log(brWidth);
  brWidth.forEach(([col, row]) => {
    const yellowCount = (col + 2) * (row + 2) - brown;
    if (yellow === yellowCount) answer = [row + 2, col + 2];
  });

  return answer;
};

console.log(solution(24, 24));
// | brown | yellow | return |
// | ----- | ------ | ------ |
// | 10    | 2      | [4, 3] |
// | 8     | 1      | [3, 3] |
// | 24    | 24     | [8, 6] |
