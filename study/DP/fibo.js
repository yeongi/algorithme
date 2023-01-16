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

const fibo = (n) => {
  if (n < 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

const t0 = performance.now();
fibo(30);
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");

const t2 = performance.now();
fiboNacci(100);
const t3 = performance.now();
console.log(t3 - t2, "milliseconds");
