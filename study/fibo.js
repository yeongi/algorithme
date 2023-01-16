const fibonacci = () => {
  const fibboTable = [1, 1];

  return function (n) {
    if (n - 1 < 2) fibboTable[n - 1];

    for (let i = 2; i < n; i++) {
      fibboTable.push(fibboTable[i - 2] + fibboTable[i - 1]);
    }

    return fibboTable[n - 1];
  };
};

const fiboNacci = fibonacci();

console.log(fiboNacci(30));
