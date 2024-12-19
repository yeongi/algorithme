// maxSoFar 변수를 사용하여 현재까지 본 최대값을 추적합니다.
// chunks 변수로 만들 수 있는 청크의 수를 카운트합니다.
// 배열을 순회하면서:
// 현재 원소와 maxSoFar를 비교하여 maxSoFar를 업데이트합니다.
// 만약 maxSoFar가 현재 인덱스와 같다면, 새로운 청크를 만들 수 있으므로 chunks를 증가시킵니다.
// 최종적으로 chunks를 반환합니다.

function maxChunksToSorted(arr) {
  let maxSoFar = 0;
  let chunks = 0;

  for (let i = 0; i < arr.length; i++) {
    maxSoFar = Math.max(maxSoFar, arr[i]);
    if (maxSoFar === i) {
      chunks++;
    }
  }

  return chunks;
}
