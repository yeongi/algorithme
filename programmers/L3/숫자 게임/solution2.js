const solution = (a, b) => {
  let score = 0;
  //점수를 얻는것이므로 순서는 상관 없음
  const sortA = a.sort((a, b) => {
    return b - a;
  });
  const sortB = b.sort((a, b) => {
    return b - a;
  });

  let j = 0;

  for (let i = 0; i < sortA.length; i += 1) {
    if (sortA[i] < sortB[j]) {
      score += 1;
      j += 1;
    } else {
      sortB.pop();
    }
  }

  return score;
};

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
