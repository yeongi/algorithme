function solution(data, col, row_begin, row_end) {
  const modSi = [];
  tupleSort(data, col);

  for (let i = row_begin - 1; i < row_end; i++) {
    let sum = 0;
    data[i].forEach((element) => {
      //mod 연산 i는 인덱스므로 S_rowbegin을 만들어 주기 위해 +1
      sum += element % (i + 1);
    });
    //연산을 마치고 S_i 배열에 삽입
    modSi.push(sum);
  }

  //모든 S_i를 ^ 연산함
  return modSi.reduce((acc, cur) => {
    return acc ^ cur;
  });
}

const tupleSort = (data, col) => {
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    return a[col - 1] - b[col - 1];
  });

  return data;
};

// | data                               | col | row_begin | row_end | result |
// | ---------------------------------- | --- | --------- | ------- | ------ |
// | [[2,2,6],[1,5,10],[4,2,9],[3,8,3]] | 2   | 2         | 3       | 4      |

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
