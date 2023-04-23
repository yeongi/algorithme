function solution(tickets) {
  const nodeArr = [...new Set(tickets.flat(1))];

  const routesGraph = new Map();
  nodeArr.forEach((node) => routesGraph.set(node, []));
  tickets.forEach(([a, b]) => {
    routesGraph.get(a).push(b);
  });

  const visited = [];
  const road = [];

  const history = tickets.map((a) => a.join(""));

  console.log(history);

  const dfs = (start) => {
    console.log("시작 지점:", start);
    console.log("방문 지점:", visited);

    const destinations = routesGraph.get(start);

    if (destinations.length > 0) {
      const des = destinations.sort()[0];
      const str = start + des;
      if (history.includes(str)) {
        history.splice(history.findIndex((a) => a === str));
        road.push(start);
        road.push(des);
        dfs(des);
      }
    } else {
      road.push(start);
    }
  };

  dfs("ICN", routesGraph);

  return road;
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

// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	["ICN", "JFK", "HND", "IAD"]
// [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
