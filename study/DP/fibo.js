let recursionCount = 0;
let DPCount = 0;

const fibonacci = () => {
  const fibboTable = {};

  return function fib(n) {
    DPCount++;
    if (n in fibboTable) {
      return fibboTable[n];
    } else {
      if (n < 2) {
        fibboTable[n] = 1;
        return fibboTable[n];
      } else {
        fibboTable[n] = fib(n - 2) + fib(n - 1);
        return fibboTable[n];
      }
    }
  };
};

const fiboDP = fibonacci();

const fibo = (n) => {
  recursionCount++;
  if (n < 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
};

const t0 = performance.now();
console.log("피보나치 수열 30번 째 수", fibo(30));
const t1 = performance.now();
console.log("재귀 호출 시간 : ", t1 - t0, "milliseconds");
console.log("재귀 호출 횟수 : ", recursionCount, "회");

const t2 = performance.now();
console.log("피보나치 수열 30번 째 수", fiboDP(30));
const t3 = performance.now();
console.log("DP 호출 시간 : ", t3 - t2, "milliseconds");
console.log("DP 호출 횟수 : ", DPCount, "회");
