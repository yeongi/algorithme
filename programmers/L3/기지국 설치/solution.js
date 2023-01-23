const solution = (N, stations, W) => {
  let sum = 0;
  let breakpoint = 1;

  for (const v of stations) {
    sum += Math.ceil((v - W - breakpoint) / (2 * W + 1));

    breakpoint = v + W + 1;
  }

  if (breakpoint <= N) {
    sum += Math.ceil((N - breakpoint + 1) / (2 * W + 1));
  }

  return sum;
};

// const solution = (n, stations, w) => {
//   const apart = Array.from({ length: n }).fill(0);

//   const networkLen = w * 2 + 1;
//   const len = n - 1;
//   let answer = 0;

//   stations.forEach((station) => {
//     const pos = station - 1;
//     for (let i = 0; i <= w; i += 1) {
//       if (pos + i < n) apart[pos + i] = 1;
//       if (pos - i >= 0) apart[pos - i] = 1;
//     }
//   });

//   let zeroLen = 0;

//   for (let i = 0; i < n; i += 1) {
//     if (apart[i] === 0) {
//       zeroLen += 1;
//       if (i === len) answer += Math.ceil(zeroLen / networkLen);
//     } else {
//       if (zeroLen > 0) answer += Math.ceil(zeroLen / networkLen);
//       zeroLen = 0;
//     }
//   }

//   return answer;
// };

console.log(solution(11, [4, 11], 1));

// | N   | stations | W   | answer |
// | --- | -------- | --- | ------ |
// | 11  | [4, 11]  | 1   | 3      |
// | 16  | [9]      | 2   | 3      |
