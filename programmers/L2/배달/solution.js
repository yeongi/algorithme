function solution(n, road, k) {
  const distanceTable = Array.from({ length: n + 1 }, (_) => {
    return Infinity;
  });

  const sortedRoad = [];

  road.forEach((table) => {
    const [to, from, distance] = table;
    if (to < from) sortedRoad.push([to, from, distance]);
    if (from > to) sortedRoad.push([from, to, distance]);
  });

  distanceTable[0] = 0;

  const visited = Array.from({ length: n + 1 }, (_) => {
    return false;
  });
  visited[0] = true;

  const findMinDistance = (array) => {
    const res = [];
    visited.forEach((bool, index) => {
      if (!bool) res.push({ distance: array[index], to: index + 1 });
    });

    res.sort((a, b) => {
      return a.distance - b.distance;
    });

    console.log(res);

    return res[0];
  };

  //1번에서 방문
  visited[1] = true;
  sortedRoad.forEach(([to, from, dis]) => {
    if (to === 1) {
      if (dis < distanceTable[from]) distanceTable[from] = dis;
    }
  });

  //계속 방문
  while (visited.includes(false)) {
    let { distance, to } = findMinDistance(distanceTable);
    console.log(distance, to, distanceTable, visited);
    visited[to] = true;
    sortedRoad.forEach(([tTo, tFrom, tDis]) => {
      if (tTo === to) {
        if (distance + tDis < distanceTable[tFrom])
          distanceTable[tFrom] = distance + tDis;
      }
    });
  }

  return distanceTable.reduce((acc, cur) => {
    if (cur <= k) return acc + 1;
    return acc;
  }, 0);
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);

// ### 입출력 예

// | N   | road                                                      | K   | result |
// | --- | --------------------------------------------------------- | --- | ------ |
// | 5   | [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]         | 3   | 4      |
// | 6   | [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]] | 4   | 4      |

//1트
const firstSolution = (N, road, k) => {
  // 최단 경로를 계산하는 배열
  const path = Array.from({ length: N }, (_) => {
    return 0;
  });

  //초기 상태 정의
  road.forEach((map, index) => {
    if (map[0] === 1) {
      road.splice(index, 1);
      path[map[1] - 1] = map[2];
    }
  });

  road.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let home = 0; home < N; home++) {
    road.forEach((map) => {
      const [a, b] =
        map[0] < map[1] ? [map[0] - 1, map[1] - 1] : [map[1] - 1, map[0] - 1];
      if (path[b] === 0) {
        path[b] = path[a] + map[2];
      } else {
        if (path[b] < path[a] + map[2]) return;
        path[b] = path[a] + map[2];
      }
    });
  }

  return path.reduce((acc, cur) => {
    if (cur <= k) return acc + 1;
    return acc;
  }, 0);
};
