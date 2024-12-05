// 과일 장수
function solution(k, m, score) {
  const sortedBox = score.sort((a, b) => a - b);

  const res = [];

  let start = sortedBox.length;
  let box;

  while (start >= m) {
    box = sortedBox.slice(start - m, start);
    res.push(box);
    start -= m;
  }

  return res.reduce((acc, cur) => acc + cur[0] * m, 0);
}
