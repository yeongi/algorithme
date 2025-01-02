/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowels = ["a", "e", "i", "o", "u"];
  const res = [];
  const _computedVowels = words.map((word) => {
    let res = 0;
    const s = word.charAt(0);
    const l = word.charAt(word.length - 1);

    if (word.length === 1) {
      if (vowels.includes(s)) res += 1;
    } else {
      if (vowels.includes(s) && vowels.includes(l)) res += 1;
    }

    return res;
  });

  queries.forEach(([start, end]) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += _computedVowels[i];
    }
    res.push(sum);
  });

  return res;
};

// 내가 짠 코드
// 배열을 돌면서 O(n) 의 시간을 사용하고 있다.

var vowelStrings = function (words, queries) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const n = words.length;
  const prefixSum = new Array(n + 1).fill(0);

  // Compute prefix sum
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const isVowelString =
      vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    prefixSum[i + 1] = prefixSum[i] + (isVowelString ? 1 : 0);
  }

  // Process queries
  return queries.map(([start, end]) => prefixSum[end + 1] - prefixSum[start]);
};

// 누적합을 사용한 코드
// O(1) 의 시간을 사용하고 있다.
