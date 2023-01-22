const solution = (a, b) => {
  let score = 0;
  //점수를 얻는것이므로 순서는 상관 없음
  const sortB = b.sort((a, b) => {
    return b - a;
  });

  let sortA = a.sort((a, b) => {
    return b - a;
  });

  sortA.forEach((num, i) => {
    if (num < sortB[i]) {
      score += 1;
    } else {
      sortA = indexShiftArr(sortB);
    }
  });

  return score;
};

const indexShiftArr = (arr) => {
  const last = arr.pop();
  const first = arr.shift();
  arr.unshift(first);
  arr.push(last);
  return arr;
};

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));

// | A         | B         | result |
// | --------- | --------- | ------ |
// | [5,1,3,7] | [2,2,6,8] | 3      |
// | [2,2,2,2] | [1,1,1,1] | 0      |
