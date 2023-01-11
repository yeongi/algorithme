const solution = (storey) => {
  let div = storey;
  let sum = 0;
  while (div > 0) {
    if (div < 10) {
      if (div <= 5) {
        sum += div;
        break;
      }
      if (div > 5) {
        sum += 10 - div + 1;
        break;
      }
    }

    if (div % 10 > 5) {
      console.log(div);
      sum += 10 - (div % 10);
      div = Math.floor(div / 10);
      div += 1;
    } else if (div % 10 === 5) {
      sum += div % 10;
      div = Math.floor(div / 10);
      if (div % 10 >= 5) div += 1;
    } else {
      sum += div % 10;
      div = Math.floor(div / 10);
    }
  }

  return sum;
};

console.log(solution(75));

// | storey | result |
// | ------ | ------ |
// | 16     | 6      |
// | 2554   | 16     |
// | 95     | 6      |
// |155     | 11     |
// |154    | 10      |
