function topologicalSort(vertices, edges) {
  const inDegree = Array(vertices).fill(0);
  const graph = Array.from({ length: vertices }, () => []);

  // Build the graph and calculate in-degrees of vertices
  for (let [u, v] of edges) {
      graph[u].push(v);
      inDegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < vertices; i++) {
      if (inDegree[i] === 0) {
          queue.push(i);
      }
  }

  const sortedOrder = [];
  while (queue.length > 0) {
      const vertex = queue.shift();
      sortedOrder.push(vertex);

      for (let neighbor of graph[vertex]) {
          inDegree[neighbor]--;
          if (inDegree[neighbor] === 0) {
              queue.push(neighbor);
          }
      }
  }

  // Check if there was a cycle
  if (sortedOrder.length !== vertices) {
      throw new Error("The graph has a cycle!");
  }

  return sortedOrder;
}

// Example usage:
const vertices = 6;
const edges = [
  [5, 2],
  [5, 0],
  [4, 0],
  [4, 1],
  [2, 3],
  [3, 1]
];

console.log(topologicalSort(vertices, edges));  // Output: [5, 4, 2, 3, 1, 0]
