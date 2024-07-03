//Implement Prims algorithm

class Graph{
  constructor () {
      this.vertices = [];
      this.edges = [];
  }
  addVertex(vertex){
      this.vertices.push(vertex);
      this.edges[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
      this.edges[vertex1].push({vertex:vertex2, weight:weight});
      this.edges[vertex2].push({vertex:vertex1, weight:weight});
  }
  prims(){
      const visited = new Set();
      const mst = [];
      
      //start with first vertex(but you can choose any vertex as starting vertex)
      visited.add(this.vertices[0]);
      let mstSum = 0;
      while(visited.size < this.vertices.length){
          let minEdge = null;
          for(const vertex of visited){
              const edges = this.edges[vertex];
              for (const edge of edges) {
                  if(!visited.has(edge.vertex) && (minEdge === null || edge.weight < minEdge.weight)){
                      minEdge = edge;
                  }
              }
          }
          if(minEdge !== null){
              mst.push(minEdge);
              visited.add(minEdge.vertex);
              mstSum = mstSum + minEdge.weight;
          }
      }
      console.log(mst);
      console.log("Minimum Cost:", mstSum);
  }
}

const graph = new Graph();
//add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
// Add edges with weights(u, v, w)
graph.addEdge('A', 'B', 2);
graph.addEdge('B', 'C', 3);
graph.addEdge('B', 'D', 1);
graph.addEdge('B', 'E', 4);
graph.addEdge('C', 'D', 5);
graph.addEdge('C', 'E', 6);
console.log(graph.edges);
graph.prims();
