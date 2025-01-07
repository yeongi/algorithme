function solution(wallpaper) {
  var answer = [];
  // . -> 빈칸
  // # -> 파일
  const E = ".";
  const F = "#";
  const x = [];
  const y = [];

  wallpaper.forEach((col, i) => {
    [...col].forEach((row, j) => {
      if (row === F) {
        x.push(i);
        y.push(j);
      }
    });
  });

  return [
    Math.min(...x),
    Math.min(...y),
    Math.max(...x) + 1,
    Math.max(...y) + 1,
  ];
}
