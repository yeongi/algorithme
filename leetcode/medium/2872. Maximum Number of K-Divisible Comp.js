// 그래프 표현: 인접 리스트를 사용하여 그래프를 표현했습니다. 이는 메모리 사용을 줄이고 탐색을 더 효율적으로 만듭니다.
// DFS 구현: 수정된 DFS는 각 노드에서 시작하여 서브트리의 합을 계산합니다. 부모 노드 정보를 전달하여 불필요한 재방문을 방지합니다.
// 결과 계산: count 변수를 사용하여 k로 나누어 떨어지는 서브트리의 수를 직접 카운트합니다.
// 최적화: 서브트리의 합이 k로 나누어 떨어질 때, 그 서브트리의 값을 0으로 반환하여 상위 노드의 계산에 영향을 주지 않도록 합니다.

// 1. 그래프로 표현해야 한다. ( 방향이 없기 때문일 수도 )
// 2. DFS로 푼다.
// 3. k로 나누어 떨어지면 count를 증가시킨다.

var maxKDivisibleComponents = function (n, edges, values, k) {
  const graph = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let count = 0;

  const dfs = (node, parent) => {
    let sum = values[node];
    for (const child of graph[node]) {
      if (child !== parent) {
        sum += dfs(child, node);
      }
    }
    if (sum % k === 0) {
      count++;
      return 0;
    }
    return sum;
  };

  dfs(0, -1);
  return count;
};
