const arr = [1, 2, 3, 4];
const routes = [
  [1, 2],
  [1, 4],
  [2, 1],
  [2, 4],
  [3, 4],
  [4, 1],
  [4, 2],
  [4, 3],
];

const graph = new Map();

//add node
function addNode(element) {
  graph.set(element, []);
}

//add edge, directed
function addEdge(element, destination) {
  graph.get(element).push(destination);
}

//create the graph
arr.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(graph);
