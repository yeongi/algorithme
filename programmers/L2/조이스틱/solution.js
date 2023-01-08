function solution(name) {
  let cnt = 0;
  const profit = [];
  let strArr = [...name];

  //알파벳 이동 횟수
  strArr.forEach((char) => {
    let ascChar = char.charCodeAt(0);
    if (ascChar >= 78) {
      let ascStr = 91;
      cnt += ascStr - ascChar;
    }
    if (ascChar <= 77) {
      let ascStr = 65;
      cnt += ascChar - ascStr;
    }
  });

  //자리 이동 횟수
  //즉, A가 시작되기 전의 문자열의 길이가 A가 연속되는 길이보다 짧을 때 뒤로 이동해야 한다.
  const answer = strArr.reduce((acc, cur, index) => {
    if (cur === "A") {
      if (index - 1 < ACnt(name.slice(index))) {
        profit.push(ACnt(name.slice(index)) - (index - 1));
      }
    }
    return acc + 1;
  }, 0);

  return cnt + answer - Math.max(profit) - 1;
}

const ACnt = (string) => {
  arr = string.split("");
  let aIndex = arr.findIndex((char) => char === "A");
  let count = 0;
  while (string[aIndex] === "A") {
    count += 1;
    aIndex += 1;
  }

  return count;
};

console.log(solution("BBBAAAAABAAAAAAAAAAA"));
