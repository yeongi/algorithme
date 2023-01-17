function solution(cap, n, deliveries, pickups) {
  const allArray = [...deliveries, ...pickups];
  let sum = 0;
  let cur = 0;
  let pLen = pickups.length;
  let dLen = deliveries.length;

  while (pLen !== 0 && dLen !== 0) {
    sum += dLen >= pLen ? dLen * 2 : pLen * 2;
    cur = 0;

    for (let i = dLen - 1; i >= 0; i -= 1) {
      if (cur + allArray[i] <= cap) {
        cur += allArray[i];
        allArray[i] = 0;
        dLen -= 1;
      } else {
        allArray[i] -= cap - cur;
        break;
      }
    }

    cur = 0;

    for (let i = n + pLen - 1; n <= i; i -= 1) {
      if (cur + allArray[i] <= cap) {
        cur += allArray[i];
        allArray[i] = 0;
        pLen -= 1;
      } else {
        allArray[i] -= cap - cur;
        break;
      }
    }
  }

  return sum;
}

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));

// | cap | n | deliveries | pickups | result |
// | --- | --- | --- | --- | --- |
// | 4 | 5 | [1, 0, 3, 1, 2] | [0, 3, 0, 4, 0] | 16 |
// | 2 | 7 | [1, 0, 2, 0, 1, 0, 2] | [0, 2, 0, 1, 0, 2, 0] | 30 |
