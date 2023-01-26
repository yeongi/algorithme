function solution(d, budget) {
  // 예산을 채우는 갯수를 계산하는 거니까
  // 오름 차순으로 정렬하고
  // 예산을 넘으면 -1 한다.
  const sortArr = d.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  let sum = 0;

  for (let i = 0; i < sortArr.length; i++) {
    if (sum <= budget) {
      count += 1;
      sum += sortArr[i];
    } else {
      count -= 1;
      break;
    }
  }

  return count;
}

console.log(solution([2, 2, 3, 3], 10));

// d	        budget	result
// [1,3,2,5,4]	9	    3
// [2,2,3,3]	10	    4
