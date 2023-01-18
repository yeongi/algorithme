function solution(nums) {
  const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const sumThree = (array) => {
    const len = array.length;
    const sum = [];
    for (let i = 0; i < len - 2; i++) {
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          const num = array[i] + array[j] + array[k];
          sum.push(num);
        }
      }
    }
    return sum;
  };

  const sumArray = sumThree(nums);

  const primeArr = sumArray.filter((num) => isPrime(num));

  return primeArr.length;
}

//중복인 숫자도 포함 시켜야 했음.
console.log(solution([1, 2, 7, 6, 4]));

// | nums        | result |
// | ----------- | ------ |
// | [1,2,3,4]   | 1      |
// | [1,2,7,6,4] | 4      |
