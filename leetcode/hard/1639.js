/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  const frequency = {};

  const findFrequencyChar = (str) => {
    if (str in frequency) return;

    words.forEach((word, j) => {
      [...word].forEach((c, k) => {
        if (str === c) {
          if (str in frequency) {
            frequency[str].push([j, k]);
          } else {
            frequency[str] = [[j, k]];
          }
        }
      });
    });
  };

  [...target].forEach((c) => findFrequencyChar(c));

  const res = [];
  [...target].forEach((c, i) => {
    const temp = [];
    if (i === 0) {
      frequency[c].forEach(([, k]) => {
        temp.push(k + "");
      });
    } else if (c in frequency) {
      frequency[c].forEach(([, k]) => {
        res.forEach((e) => {
          const lastChar = e[e.length - 1];
          if (k > lastChar) {
            temp.push(`${e}${k}`);
          }
        });
      });
    }
    res.push(...temp);
  });

  return res.reduce((acc, cur) => {
    if (cur.length === target.length) return acc + 1;
    return acc;
  }, 0);
};

// 내가 풀었던 풀이
// 당신의 코드를 분석해보겠습니다. 주요 문제점과 개선 방안은 다음과 같습니다:
// 시간 복잡도: 현재 코드는 모든 가능한 조합을 생성하고 있어 시간 복잡도가 매우 높습니다. 이는 큰 입력값에 대해 시간 초과를 유발할 수 있습니다.
// 메모리 사용: 모든 가능한 조합을 res 배열에 저장하고 있어 메모리 사용량이 매우 큽니다.
// 모듈로 연산 누락: 문제에서 요구하는 10^9 + 7로 나눈 나머지를 반환하지 않고 있습니다.
// 비효율적인 문자열 처리: 문자열을 계속 연결하는 방식은 비효율적입니다.
// 불필요한 반복: findFrequencyChar 함수에서 모든 단어를 매번 순회하고 있어 비효율적입니다.

// 1. 문제를 잘못 이해했다.
// 2. DP의 개념에 미숙했다.
// 3. 그래도 테스트 케이스는 통과했다.

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  const MOD = 1e9 + 7;
  const m = target.length;
  const k = words[0].length;

  // 각 위치에서의 문자 빈도수 계산
  const count = Array.from({ length: k }, () => new Array(26).fill(0));
  for (const word of words) {
    for (let i = 0; i < k; i++) {
      count[i][word.charCodeAt(i) - 97]++;
    }
  }

  // 동적 프로그래밍
  const dp = new Array(m + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < k; i++) {
    for (let j = m - 1; j >= 0; j--) {
      const c = target.charCodeAt(j) - 97;
      dp[j + 1] = (dp[j + 1] + dp[j] * count[i][c]) % MOD;
    }
  }

  return dp[m];
};
ㅂ;
