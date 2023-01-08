function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    // 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
    while (stack.length > 0 && stack[stack.length - 1] < number[i] && k > 0) {
      // 현재 숫자보다 큰 수가 나올때까지 최대 k번 반복함
      k--;
      stack.pop();
    }
    stack.push(number[i]);
  }
  stack.splice(number.length - k, k); // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
  return stack.join("");
}

// | number       | k   | return   |
// | ------------ | --- | -------- |
// | "1924"       | 2   | "94"     |
// | "1231234"    | 3   | "3234"   |
// | "4177252841" | 4   | "775841" |

console.log(solution("4177252841", 4));
