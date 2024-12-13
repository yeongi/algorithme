// const getArea = (board, target) => {
//   const area = [];

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] === target) {
//         const temp = [];
//         dfs(i, j, board, temp, target);
//         area.push(temp);
//       }
//     }
//   }
//   return area;
// };

// const dfs = (x, y, board, area, target) => {
//   if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;

//   if (board[x][y] === target) {
//     area.push([x, y]);
//     board[x][y] = -1;

//     dfs(x + 1, y, board, area, target);
//     dfs(x - 1, y, board, area, target);
//     dfs(x, y + 1, board, area, target);
//     dfs(x, y - 1, board, area, target);
//   }
// };

// const rotate = (arr) => {
//   const n = arr.length;
//   const m = arr[0].length;
//   const ret = Array.from(Array(m), () => Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       ret[j][n - i - 1] = arr[i][j];
//     }
//   }

//   return ret;
// };

// function solution(game_board, table) {
//   const gameBoardEmptyArea = getArea(game_board, 0);
//   const tableBlockArea = getArea(table, 1);

//   let answer = 0;

//   for (let i = 0; i < tableBlockArea.length; i++) {
//     let block = tableBlockArea[i];
//     let flag = false;

//     for (let j = 0; j < gameBoardEmptyArea.length; j++) {
//       const empty = gameBoardEmptyArea[j];
//       if (block.length !== empty.length) continue;

//       for (let k = 0; k < 4; k++) {
//         block.sort();
//         empty.sort();

//         if (JSON.stringify(block) === JSON.stringify(empty)) {
//           gameBoardEmptyArea.splice(j, 1);
//           answer += block.length;
//           flag = true;
//           break;
//         }

//         block = rotate(block);
//       }

//       if (flag) break;
//     }
//   }

//   return answer;
// }

// console.log(
//   solution(
//     [
//       [1, 1, 0, 0, 1, 0],
//       [0, 0, 1, 0, 1, 0],
//       [0, 1, 1, 0, 0, 1],
//       [1, 1, 0, 1, 1, 1],
//       [1, 0, 0, 0, 1, 0],
//       [0, 1, 1, 1, 0, 0],
//     ],
//     [
//       [1, 0, 0, 1, 1, 0],
//       [1, 0, 1, 0, 1, 0],
//       [0, 1, 1, 0, 1, 1],
//       [0, 0, 1, 0, 0, 0],
//       [1, 1, 0, 1, 1, 0],
//       [0, 1, 0, 0, 0, 0],
//     ]
//   )
// );

function solution(game_board, table) {
  const n = game_board.length;
  const emptySpaces = findShapes(game_board, 0);
  const puzzlePieces = findShapes(table, 1);
  let answer = 0;

  for (let i = 0; i < puzzlePieces.length; i++) {
    for (let j = 0; j < emptySpaces.length; j++) {
      if (puzzlePieces[i].length === emptySpaces[j].length) {
        const rotatedPieces = getAllRotations(puzzlePieces[i]);
        for (let rotatedPiece of rotatedPieces) {
          if (isSameShape(rotatedPiece, emptySpaces[j])) {
            answer += rotatedPiece.length;
            emptySpaces.splice(j, 1);
            puzzlePieces.splice(i, 1);
            i--;
            break;
          }
        }
        break;
      }
    }
  }

  return answer;
}

function findShapes(board, target) {
  const shapes = [];
  const n = board.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === target && !visited[i][j]) {
        const shape = [];
        dfs(i, j, board, visited, shape, target);
        shapes.push(normalizeShape(shape));
      }
    }
  }

  return shapes;
}

function dfs(x, y, board, visited, shape, target) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const n = board.length;

  visited[x][y] = true;
  shape.push([x, y]);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      !visited[nx][ny] &&
      board[nx][ny] === target
    ) {
      dfs(nx, ny, board, visited, shape, target);
    }
  }
}

function normalizeShape(shape) {
  const minX = Math.min(...shape.map((p) => p[0]));
  const minY = Math.min(...shape.map((p) => p[1]));
  return shape
    .map((p) => [p[0] - minX, p[1] - minY])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function getAllRotations(shape) {
  const rotations = [shape];
  for (let i = 0; i < 3; i++) {
    const lastRotation = rotations[rotations.length - 1];
    const newRotation = lastRotation.map(([x, y]) => [y, -x]);
    rotations.push(normalizeShape(newRotation));
  }
  return rotations;
}

function isSameShape(shape1, shape2) {
  if (shape1.length !== shape2.length) return false;
  for (let i = 0; i < shape1.length; i++) {
    if (shape1[i][0] !== shape2[i][0] || shape1[i][1] !== shape2[i][1]) {
      return false;
    }
  }
  return true;
}
