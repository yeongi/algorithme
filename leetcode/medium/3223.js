/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  // index
  // 1. 왼쪽에 같은 char가 존재
  // 2. 오른쪽에도 같은 char가 존재
  // return이 숫자니까 개수가 3개 이상 이여야 함
  // 각각 char의 숫자를 세고 3개 이상인 영어를 제거
  // ( 6 -> 4 -> 2)
  // ( 3 -> 1)
  // ( 5 -> 2)
  const hash = {};
  [...s].forEach((c) => {
    if (c in hash) {
      hash[c] += 1;
    } else {
      hash[c] = 1;
    }
  });
  let res = 0;
  for (const char in hash) {
    const count = hash[char];
    if (count > 2) {
      let temp = count;
      while (temp > 2) {
        temp -= 2;
      }
      res += temp;
    } else {
      res += count;
    }
  }

  return res;
};
