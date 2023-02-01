function solution(land, P, Q) {
  let p = 0;
  let q = 0;

  const everyFloor = land.flat().sort((a, b) => {
    return a - b;
  });

  const answer = [];

  const floor = [...new Set(everyFloor)];

  floor.forEach((element) => {
    for (let i = 0; i < everyFloor.length; i += 1) {
      if (everyFloor[i] === element) continue;
      if (everyFloor[i] < element) {
        p += (element - everyFloor[i]) * P;
      }
      if (everyFloor[i] > element) {
        q += (everyFloor[i] - element) * Q;
      }
    }
    answer.push(p + q);
    p = 0;
    q = 0;
  });

  return Math.min(...answer);
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    3,
    2
  )
);

// [[1, 2], [2, 3]]
