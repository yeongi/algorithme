function solution(numbers, hand) {
  const answer = [];
  let LPos = "*";
  let RPos = "#";

  const getDistance = (to, from) => {
    let [th, tw] = [0, 0];
    let [fh, fw] = [0, 0];
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];

    arr.forEach((num, index) => {
      if (num.includes(to)) {
        th = index;
        tw = num.indexOf(to);
      }
      if (num.includes(from)) {
        fh = index;
        fw = num.indexOf(from);
      }
    });

    // console.log("To", to, th, tw);
    // console.log("From", from, fh, fw);
    // console.log("거리", Math.abs(th - fh) + Math.abs(tw - fw));

    return Math.abs(th - fh) + Math.abs(tw - fw);
  };

  numbers.forEach((num) => {
    switch (num) {
      case 1:
      case 4:
      case 7:
        answer.push("L");
        LPos = num;
        break;
      case 3:
      case 6:
      case 9:
        answer.push("R");
        RPos = num;
        break;
      default:
        const result = getDistance(LPos, num) - getDistance(RPos, num);
        if (result > 0) {
          answer.push("R");
          RPos = num;
        } else if (result < 0) {
          answer.push("L");
          LPos = num;
        } else {
          if (hand === "right") {
            answer.push("R");
            RPos = num;
          }
          if (hand === "left") {
            answer.push("L");
            LPos = num;
          }
        }
        break;
    }
  });

  return answer.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));

// 입출력 예
// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL
