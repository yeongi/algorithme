function solution(diffs, times, limit) {
  function canSolveWithLevel(level) {
    let totalTime = 0;
    let prevTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        totalTime += times[i];
      } else {
        const mistakes = diffs[i] - level;
        totalTime += mistakes * (times[i] + prevTime) + times[i];
      }

      if (totalTime > limit) {
        return false;
      }

      prevTime = times[i];
    }

    return totalTime <= limit;
  }

  let low = 1;
  let high = Math.max(...diffs);
  let result = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canSolveWithLevel(mid)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}
