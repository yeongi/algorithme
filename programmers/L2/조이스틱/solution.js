function solution(name) {
  let cnt = 0;
  let strArr = [...name];

  //알파벳 이동 횟수
  strArr.forEach((char, index) => {
    let ascChar = char.charCodeAt(0);
    if (ascChar >= 78) {
      let ascStr = 91;
      while (ascChar != ascStr) {
        ascStr -= 1;
        cnt++;
      }
    }

    if (ascChar <= 77) {
      let ascStr = 65;
      while (ascChar != ascStr) {
        ascStr += 1;
        cnt++;
      }
    }
  });

  //자리 이동 횟수
  while (strArr.includes("A")) {
    const arr = name.split("A");
    console.log(arr);
    strArr = arr[0].concat(arr[1]);
  }

  cnt += strArr.length - 1;

  return cnt;
}

console.log(solution("JEROEN"));
