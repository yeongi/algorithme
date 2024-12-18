function solution(n, costs) {
  const graph = {};
  const res = [];

  costs.forEach((info) => {
    const [start, end, cost] = info;

    if (!graph[start]) {
      graph[start] = [];
    }
    if (!graph[end]) {
      graph[end] = [];
    }

    graph[start].push({ end, cost });
    graph[end].push({ end: start, cost });
  });

  let totalCost = 0;

  const dfs = (startIndex, visitedArr) => {
    visitedArr[startIndex] = true;

    // 여러 노드 중 코스트가 가장 낮은 노드를 선택하면 됨.
    const sortedEnd = graph[startIndex].sort((a, b) => a.cost - b.cost);
    const minNode = sortedEnd.filter((node) => !visitedArr[node.end]);

    if (minNode.length === 0) {
      return;
    }

    const { end, cost } = minNode[0];

    if (!visitedArr[end]) {
      totalCost += cost;
      dfs(end, visitedArr);
    }
  };

  for (let i = 0; i < n; i++) {
    const visited = Object.keys(graph).reduce((acc, cur) => {
      acc[cur] = false;
      return acc;
    }, {});

    dfs(i, visited);
    if (totalCost !== 0) {
      res.push(totalCost);
    }
    totalCost = 0;
  }

  return Math.min(...res);
}

console.log(
  solution(5, [
    [0, 1, 5],
    [2, 3, 3],
    [1, 2, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7],
  ])
);

function solution(n, costs) {
  // 간선을 비용에 따라 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 부모 배열 초기화
  const parent = Array.from({ length: n }, (_, i) => i);

  // find 함수: 노드의 루트를 찾음
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  // union 함수: 두 집합을 합침
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
      return true;
    }
    return false;
  }

  let totalCost = 0;
  let edgesUsed = 0;

  for (const [u, v, cost] of costs) {
    if (union(u, v)) {
      totalCost += cost;
      edgesUsed++;
      if (edgesUsed === n - 1) break;
    }
  }

  return totalCost;
}

// 그리디 알고리즘을 사용하여 최소 신장 트리(Minimum Spanning Tree, MST) 문제를 해결할 수 있습니다. 이 문제에 적용할 수 있는 두 가지 대표적인 그리디 알고리즘은 크루스칼(Kruskal) 알고리즘과 프림(Prim) 알고리즘입니다.

// ## 크루스칼 알고리즘

// 크루스칼 알고리즘은 다음과 같은 그리디 접근 방식을 사용합니다:

// 1. 모든 간선을 가중치에 따라 오름차순으로 정렬합니다.
// 2. 가장 작은 가중치를 가진 간선부터 선택합니다.
// 3. 선택한 간선이 사이클을 형성하지 않으면 MST에 추가합니다.
// 4. 모든 정점이 연결될 때까지 2-3 단계를 반복합니다.

// 이 방법은 항상 가장 작은 가중치의 간선을 선택하므로 그리디 전략을 따릅니다[1][2].

// ## 프림 알고리즘

// 프림 알고리즘도 그리디 접근을 사용하며, 다음과 같이 동작합니다:

// 1. 임의의 시작 정점을 선택합니다.
// 2. 현재 MST에 연결된 정점들과 인접한 간선 중 가장 가중치가 작은 간선을 선택합니다.
// 3. 선택한 간선이 연결하는 새로운 정점을 MST에 추가합니다.
// 4. 모든 정점이 MST에 포함될 때까지 2-3 단계를 반복합니다[2][7].

// ## 그리디 전략의 정당성

// 이 두 알고리즘이 그리디 전략으로 최적해를 찾을 수 있는 이유는 다음과 같습니다:

// 1. **안전한 간선 선택**: 매 단계에서 선택하는 간선은 항상 "안전한 간선"입니다. 즉, 이 간선을 선택해도 최종적으로 MST를 구성할 수 있습니다[4].

// 2. **부분 문제 최적성**: MST의 부분집합도 그 자체로 최소 신장 트리의 성질을 가집니다[5].

// 3. **사이클 방지**: 두 알고리즘 모두 사이클 형성을 방지하여 트리 구조를 유지합니다[6].

// 이러한 그리디 접근은 문제의 전역 최적해를 보장하면서도 효율적인 해법을 제공합니다. 따라서 최소 신장 트리 문제는 그리디 알고리즘으로 효과적으로 해결할 수 있는 대표적인 예시입니다[8].

// Citations:
// [1] https://waristo.tistory.com/38
// [2] https://cloudev.tistory.com/entry/%EC%B5%9C%EC%86%8C-%EC%8B%A0%EC%9E%A5-%ED%8A%B8%EB%A6%AC-%ED%94%84%EB%A6%BC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%81%AC%EB%A3%A8%EC%8A%A4%EC%B9%BC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
// [3] https://velog.io/@jinh2352/MST%EC%B5%9C%EC%86%8C-%EC%8B%A0%EC%9E%A5%ED%8A%B8%EB%A6%AC-with-%ED%81%AC%EB%A3%A8%EC%8A%A4%EC%B9%BC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
// [4] https://programming119.tistory.com/78
// [5] https://junstar92.tistory.com/375
// [6] https://ttl-blog.tistory.com/1001
// [7] https://sheep1sik.tistory.com/43
// [8] https://byeo.tistory.com/entry/%EC%B5%9C%EC%86%8C%EC%8B%A0%EC%9E%A5%ED%8A%B8%EB%A6%AC-Minimum-Spanning-Tree-%ED%81%AC%EB%A3%A8%EC%8A%A4%EC%B9%BC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
// [9] https://blog.naver.com/choish1919/221271081957
