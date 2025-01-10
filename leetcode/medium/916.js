/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  // Function to count character frequencies
  const getFrequency = (word) => {
    const freq = new Array(26).fill(0);
    for (let char of word) {
      freq[char.charCodeAt(0) - 97]++;
    }
    return freq;
  };

  // Get maximum frequency for each character in words2
  const maxFreq = new Array(26).fill(0);
  for (let word of words2) {
    ㅌㅂㅌ;
    const freq = getFrequency(word);
    for (let i = 0; i < 26; i++) {
      maxFreq[i] = Math.max(maxFreq[i], freq[i]);
    }
  }

  // Check which words in words1 are universal
  const result = [];
  for (let word of words1) {
    const freq = getFrequency(word);
    if (freq.every((count, i) => count >= maxFreq[i])) {
      result.push(word);
    }
  }

  return result;
};

// 이 문제의 핵심 원리는 다음과 같습니다:

// 1. 문자 빈도수 계산:
//    - words2의 모든 단어에 대해 각 문자의 최대 빈도수를 계산합니다.
//    - 이를 통해 words2의 모든 단어를 포함하기 위해 필요한 각 문자의 최소 개수를 알 수 있습니다.

// 2. 효율적인 비교:
//    - words1의 각 단어에 대해, 계산된 최대 빈도수와 비교합니다.
//    - 단어가 모든 필요한 문자를 충분한 개수로 포함하고 있다면, 그 단어는 "universal"입니다.

// 3. 최적화:
//    - words2의 모든 단어를 개별적으로 확인하는 대신, 한 번의 순회로 필요한 정보를 추출합니다.
//    - 이는 시간 복잡도를 크게 줄여줍니다.

// 구체적인 구현 단계는 다음과 같습니다:

// 1. words2의 모든 단어를 순회하며 각 문자의 최대 빈도수를 계산합니다.
// 2. words1의 각 단어에 대해:
//    - 단어의 문자 빈도수를 계산합니다.
//    - 이 빈도수가 words2에서 계산된 최대 빈도수 이상인지 확인합니다.
// 3. 조건을 만족하는 단어들을 결과 리스트에 추가합니다.

// 이 방법의 장점은 words2의 모든 단어를 개별적으로 확인할 필요 없이, words1의 각 단어가 "universal"인지 빠르게 판단할 수 있다는 것입니다. 이는 문제의 시간 복잡도를 O(N * M)에서 O(N + M)으로 줄여줍니다. 여기서 N은 words1의 모든 문자의 총 개수, M은 words2의 모든 문자의 총 개수입니다[1][5].

// Citations:
// [1] https://read.learnyard.com/dsa/word-subsets/
// [2] https://github.com/rocky-191/awesome-algorithm/blob/master/docs/Leetcode_Solutions/Python/916._Word_Subsets.md
// [3] https://blog.heycoach.in/Word-Subsets-solution-in-python/
// [4] https://moons-memo.tistory.com/143
// [5] https://algo.monster/liteproblems/916
// [6] https://kkminseok.github.io/posts/leetcode_Word_Subsets/
// [7] https://prepfortech.io/leetcode-solutions/word-subsets
// [8] https://abhinandanmishra1.hashnode.dev/leetcode-problem-word-subsets
// [9] https://dev.to/seanpgallivan/solution-word-subsets-1fnj
