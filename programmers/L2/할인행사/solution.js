function solution(want, number, discount) {
  const wantHash = {};
  const discountHash = {};
  let answer = 0;

  want.forEach((things, index) => {
    wantHash[things] = number[index];
  });

  const objCompare = (b) => {
    const arrB = Object.keys(b);
    let result = true;
    arrB.forEach((element) => {
      if (element in discountHash) {
        if (discountHash[element] >= b[element]) {
          return;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    });

    return result;
  };

  for (let i = 0; i < discount.length; i++) {
    if (i < 10) {
      if (discount[i] in discountHash) {
        discountHash[discount[i]] += 1;
      } else {
        discountHash[discount[i]] = 1;
      }
    }
    if (i >= 10) {
      if (discount[i] in discountHash) {
        discountHash[discount[i]] += 1;
      } else {
        discountHash[discount[i]] = 1;
      }
      discountHash[discount[i - 10]] -= 1;
    }
    if (objCompare(wantHash)) answer += 1;
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);

// | ["banana", "apple", "rice", "pork", "pot"] | [3, 2, 2, 2, 1] | ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"] | 3      |
