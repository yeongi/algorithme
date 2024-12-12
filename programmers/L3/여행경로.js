function solution(tickets) {
  const graph = {};

  tickets.forEach(([a, b]) => {
    if (!graph[a]) {
      graph[a] = [];
    }
    graph[a].push(b);
  });

  for (const airport in graph) {
    graph[airport].sort();
  }

  const res = [];

  const dfs = (node) => {
    while (graph[node] && graph[node].length) {
      const next = graph[node].shift();
      dfs(next);
    }
    res.push(node);
  };

  dfs("ICN");

  return res.reverse();
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
