function solution(n, k, enemy) {
  let start = 0;
  let end = Math.ceil(enemy.length / 2);
  let isWin = true;

  if (enemy.length <= k) return enemy.length;

  const checkWin = (arr) => {
    if (arr.length < k) return true;
    const sum = arr
      .sort((a, b) => {
        return a - b;
      })
      .reduce((acc, cur, index) => {
        if (index < arr.length - k) {
          return acc + cur;
        }
        return acc;
      });

    if (sum <= n) return true;
    return false;
  };

  while (isWin) {
    const sliceArr = enemy.slice(start, end);
    if (sliceArr.length === enemy.length) {
      isWin = false;
      break;
    }
    if (checkWin(sliceArr)) {
      end += 1;
    }
    if (!checkWin(sliceArr)) {
      isWin = false;
    }
  }

  return end - 1;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));

// 7	3	[4, 2, 4, 5, 3, 3, 1]
