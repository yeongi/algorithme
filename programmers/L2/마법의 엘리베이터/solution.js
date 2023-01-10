const solution = (storey) => {
  let div = storey;
  let sum = 0;
  while (div > 0) {
    if (div % 10 > 5) {
      sum += 10 - (div % 10);
      if (div < 10) {
        sum += 1;
        break;
      }
      div = Math.floor(div / 10);
      div += 1;
    }

    if (div % 10 <= 5) {
      sum += div % 10;
      div = Math.floor(div / 10);
    }
  }

  return sum;
};

console.log(solution(95));

// | storey | result |
// | ------ | ------ |
// | 16     | 6      |
// | 2554   | 16     |
// | 95     | 6      |
