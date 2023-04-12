function solution(life, dungeons) {
  const answer = [];

  const cal = (reft, attemp, [a, b]) => {
    if (reft >= a) {
      return [reft - b, attemp + 1];
    }
    if (reft < a) return [reft, attemp];
  };

  function permutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permuationArr = permutation(restArr, selectNum - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  }

  permutation(dungeons, dungeons.length).forEach((arrays) => {
    let reft = life;
    let attempt = 0;
    arrays.forEach((array) => {
      [reft, attempt] = cal(reft, attempt, array);
    });
    answer.push(attempt);
  });

  return Math.max(...answer);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
