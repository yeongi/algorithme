function solution(dirs) {
  const len = 11;

  const history = [];
  let curX = 5;
  let curY = 5;

  let workCount = 0;

  [...dirs].forEach((dir) => {
    switch (dir) {
      case "U":
        if (curY < len - 1) {
          curY += 1;
          const workUp = [curX, curY, "U"].join("");
          const workDown = [curX, curY - 1, "D"].join("");
          if (!history.includes(workUp)) {
            history.push(workUp);
            history.push(workDown);
            workCount += 1;
          }
        }
        break;
      case "D":
        if (curY > 0) {
          curY -= 1;
          const workUp = [curX, curY + 1, "U"].join("");
          const workDown = [curX, curY, "D"].join("");
          if (!history.includes(workDown)) {
            history.push(workUp);
            history.push(workDown);
            workCount += 1;
          }
        }

        break;
      case "R":
        if (curX < len - 1) {
          curX += 1;
          const workRight = [curX, curY, "R"].join("");
          const workLeft = [curX - 1, curY, "L"].join("");
          if (!history.includes(workRight)) {
            history.push(workRight);
            history.push(workLeft);
            workCount += 1;
          }
        }
        break;
      case "L":
        if (curX > 0) {
          curX -= 1;
          const workRight = [curX + 1, curY, "R"].join("");
          const workLeft = [curX, curY, "L"].join("");
          if (!history.includes(workLeft)) {
            history.push(workRight);
            history.push(workLeft);
            workCount += 1;
          }
        }
        break;
      default:
        break;
    }
  });

  return workCount;
}

console.log(solution("ULURRDLLU"));
