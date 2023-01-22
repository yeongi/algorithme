function solution(babbling) {
  const combiWords = ["aya", "ye", "woo", "ma"];

  let canDoIt = 0;

  const isInBabbling = (words, string) => {
    return string.includes(words);
  };

  const subStringCombi = (words, string) => {
    let subString = string;
    if (isInBabbling(words + words, subString)) {
      return subString;
    } else {
      while (isInBabbling(words, subString)) {
        subString = string.replace(words, "");
      }
      return subString;
    }
  };

  babbling.forEach((string) => {
    let subString = string;

    for (let i = 0; i < combiWords.length; i += 1) {
      subString = subStringCombi(combiWords[i], subString);
    }

    if (subString.trim().length === 0) canDoIt += 1;
  });

  return canDoIt;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));

// 입출력 예
// babbling	result
// ["aya", "yee", "u", "maa"]	1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
