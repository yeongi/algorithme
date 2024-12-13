function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let currentWeight = 0;

  const bridge = [];

  while (bridge.length !== 0 || truck_weights.length !== 0) {
    console.log("bridge", bridge);

    if (truck_weights.length === 0) {
      if (bridge.length === 0) {
        break;
      }

      bridge.shift();
      answer += bridge_length;
      continue;
    }

    // 1. 다리에 트럭이 올라갈 수 있는지 확인
    if (currentWeight + truck_weights[0] < weight) {
      const truck = truck_weights.shift();
      bridge.push(truck);
      currentWeight += truck;
      answer++;
      continue;
    }

    // 2. 다리에 있는 트럭이 이동
    if (
      currentWeight + truck_weights[0] >= weight &&
      bridge.length < bridge_length - 1
    ) {
      bridge.push(0);
      answer++;
      continue;
    }

    // 3. 다리에 있는 트럭이 이동
    if (bridge.length) {
      currentWeight -= bridge.shift();
      answer++;
      continue;
    }
  }

  return answer;
}

console.log(solution(100, 100, [10]));
