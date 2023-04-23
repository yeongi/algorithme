const graph = new Map();

//add node
function addNode(key, a, b) {
  if (key === 0) {
    graph.set(key, [a - b, a + b]);
  } else {
    //[-1,1]
    graph.set(key, []);
    graph.get(key - 1).forEach((element) => {
      const arr = graph.get(key);
      arr.push(element - b);
      arr.push(element + b);
    });
  }
}

function solution(numbers, target) {
  var answer = 0;

  const node = [0, ...numbers];

  const array = Array.from({ length: numbers.length }, (v, i) => i);

  //create the graph
  for (let i = 0; i < node.length - 1; i++) {
    addNode(array[i], node[i], node[i + 1]);
  }

  //find target
  let count = 0;
  graph.get(numbers.length - 1).forEach((e) => {
    if (e === target) count++;
  });

  return count;
}

console.log(solution([4, 1, 2, 1], 4));

// numbers	target	return
// [1, 1, 1, 1, 1]	3	5
// [4, 1, 2, 1]	4	2
