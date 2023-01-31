function solution(numbers) {
  const hash = {};
  const answer = [];

  numbers.forEach((num, index) => {
    if (num in hash) {
      answer.push(hash[num]);
    } else {
      const stack = [num[index]];
      for (let i = index; i < numbers.length; i += 1) {
        if (num < numbers[i]) {
          big = numbers[i];
          break;
        }
      }
      hash[num] = big;
      answer.push(hash[num]);
    }
  });

  return answer;
}

console.log(solution([2, 3, 3, 5]));

// numbers	result
// [2, 3, 3, 5]	[3, 5, 5, -1]
// [9, 1, 5, 3, 6, 2]	[-1, 5, 6, 6, -1, -1]
