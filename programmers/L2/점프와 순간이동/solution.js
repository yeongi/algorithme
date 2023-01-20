function solution(n) {
  let distance = n;
  let ans = 0;

  while (distance > 2) {
    if (distance % 2 === 1) {
      ans += 1;
      distance /= 2;
    } else {
      distance /= 2;
    }
    distance = Math.floor(distance);
  }

  return ans + 1;
}

console.log(solution(5000));
