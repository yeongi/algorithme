function solution(arrayA, arrayB) {
  const sortA = arrayA.sort((a, b) => {
    return a - b;
  });
  const sortB = arrayB.sort((a, b) => {
    return a - b;
  });

  const a = [];

  let divisor = getDivisor(sortA[0]);

  divisor.forEach((divisor) => {
    let result = true;
    sortB.forEach((num) => {
      if (num % divisor === 0) result = false;
    });
    sortA.forEach((num) => {
      if (num % divisor !== 0) result = false;
    });
    if (result) a.push(divisor);
  });
  divisor = getDivisor(sortB[0]);

  divisor.forEach((divisor) => {
    let result = true;
    sortA.forEach((num) => {
      if (num % divisor === 0) result = false;
    });
    sortB.forEach((num) => {
      if (num % divisor !== 0) result = false;
    });
    if (result) a.push(divisor);
  });

  return a.length > 0 ? Math.max(...a) : 0;
}

const getDivisor = (num) => {
  const arr = [];
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
};

console.log(solution([10, 20], [5, 17]));
