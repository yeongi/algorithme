function solution(w, h) {
  const bigWidth = w * h;
  let n = 1;

  for (let i = 2; i <= Math.max(w, h); i++) {
    if (w % i === 0 && h % i === 0) {
      n = i;
    }
  }

  return bigWidth - (w + h - n);
}
