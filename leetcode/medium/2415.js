/**
 * 이진 트리 노드의 정의
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 이진 트리의 홀수 레벨 노드 값을 뒤집는 함수
 * @param {TreeNode | null} root - 이진 트리의 루트 노드
 * @return {TreeNode | null} - 수정된 이진 트리의 루트 노드
 */
function reverseOddLevels(root) {
  const queue = [root];
  let level = 0;

  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    const currentLevelNodes = [];

    // 현재 레벨의 모든 노드 처리
    for (let i = 0; i < currentLevelSize; i++) {
      const node = queue.shift(); // 큐의 앞쪽 노드 제거
      if (level % 2 === 1) {
        currentLevelNodes.push(node); // 홀수 레벨이면 노드 저장
      }
      // 자식 노드들을 큐에 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // 현재 홀수 레벨의 노드 값들 뒤집기
    if (level % 2 === 1) {
      for (let i = 0; i < currentLevelNodes.length / 2; i++) {
        const temp = currentLevelNodes[i].val;
        currentLevelNodes[i].val =
          currentLevelNodes[currentLevelNodes.length - 1 - i].val;
        currentLevelNodes[currentLevelNodes.length - 1 - i].val = temp;
      }
    }

    level++; // 레벨 카운터 증가
  }

  return root; // 수정된 트리 반환
}
