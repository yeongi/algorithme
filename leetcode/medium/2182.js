/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  const strArr = s.split("").sort();

  let result = "";
  let repeatCount = 0;
  let repeatChar = "";
  let curIndex = strArr.length - 1;

  while (strArr.length > 0) {
    if (repeatCount < repeatLimit) {
      if (strArr[curIndex] === repeatChar) {
        repeatCount++;
      } else {
        repeatCount = 1;
        repeatChar = strArr[curIndex];
      }

      result += strArr[curIndex];
      strArr.splice(curIndex, 1);
      curIndex--;

      if (curIndex !== strArr.length - 1) {
        curIndex = strArr.length - 1;
      }
    } else {
      repeatCount = 0;
      while (strArr[curIndex] === repeatChar) {
        curIndex--;
      }
    }

    if (curIndex < 0) {
      break;
    }
  }

  return result;
};

// console.log(repeatLimitedString("aababab", 2));
// console.log(repeatLimitedString("aababab", 2));
console.log(repeatLimitedString("cczazcc", 3));

var repeatLimitedString = function (s, repeatLimit) {
  // 문자 빈도수 계산
  const freq = new Array(26).fill(0);
  for (let char of s) {
    freq[char.charCodeAt(0) - 97]++;
  }

  const result = [];
  let prevChar = -1;
  let count = 0;

  while (true) {
    let found = false;

    // 가장 큰 문자부터 역순으로 탐색
    for (let i = 25; i >= 0; i--) {
      if (freq[i] === 0) continue;

      if (i !== prevChar || count < repeatLimit) {
        const char = String.fromCharCode(i + 97);
        result.push(char);
        freq[i]--;

        if (i === prevChar) {
          count++;
        } else {
          prevChar = i;
          count = 1;
        }

        found = true;
        break;
      }
    }

    if (!found) break;
  }

  return result.join("");
};

// 주어진 코드를 분석해보면 성능 개선을 위해 다음과 같은 최적화 방법을 적용할 수 있습니다:
// 문자 빈도수 계산 사용: 문자열을 정렬하고 splice하는 대신 각 문자의 빈도수를 계산하여 사용합니다. 이는 O(n) 시간 복잡도로 수행할 수 있습니다.
// 우선순위 큐 활용: 문자를 사전순으로 관리하기 위해 우선순위 큐(또는 정렬된 맵)를 사용합니다. 이를 통해 매번 가장 큰 문자를 효율적으로 선택할 수 있습니다.
// 문자열 연산 최적화: 결과 문자열을 만들 때 문자열 연결 대신 배열을 사용하고 마지막에 join하여 성능을 개선합니다.
// 이러한 최적화를 적용한 개선된 코드는 다음과 같습니다:
