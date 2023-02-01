function solution(cookie) {
  let b = Math.floor(cookie.length / 2);

  //인덱스가  b
  const cache = {};

  const arrSum = (arr) => {
    return arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  };

  cache[b] = [
    arrSum(cookie.slice(0, b)),
    arrSum(cookie.slice(b, cookie.length)),
  ];

  for (let i = b + 1; i < cookie.length; i++) {
    const [a, c] = cache[i - 1];
    cache[i] = [a + cookie[i - 1], c - cookie[i - 1]];
  }

  for (let i = b - 1; i > 0; i--) {
    const [a, c] = cache[i + 1];
    cache[i] = [a - cookie[i], c + cookie[i]];
  }

  b = 1;
  const sum = [0];

  while (b < cookie.length) {
    let [a, c] = [0, cookie.length - 1];
    let [sumA, sumC] = cache[b];
    while (a < b - 1 || c > b) {
      if (sumA < sumC) {
        sumC -= cookie[c];
        c -= 1;
      } else if (sumA > sumC) {
        sumA -= cookie[a];
        a += 1;
      } else {
        if (sum[0] < sumA) {
          sum[0] = sumA;
        }
        a += 1;
        c -= 1;
      }
    }
    b += 1;
  }

  return sum[0];
}

console.log(solution([1, 1, 2, 3]));

// | cookie    | result |
// | --------- | ------ |
// | [1,1,2,3] | 3      |
// | [1,2,4,5] | 0      |
