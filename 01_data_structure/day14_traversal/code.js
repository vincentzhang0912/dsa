//Graphs
class Graph{
  /*
  constructor(){
      this.adjacencyList = {};
  }
  //adding a vertex
  addVertex(vertex){
      if(!this.adjacencyList[vertex])
          this.adjacencyList[vertex] = [];
  }
  //adding an edge(u,v)
  addEdge(vertex1, vertex2){
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
  }
printGraph(){
      for(let i in this.adjacencyList){
          console.log("Adjanceny List of vertex "+i);
          for(let j = 0 ; j< this.adjacencyList[i].length; j++){
              console.log("--->"+this.adjacencyList[i][j]);
          }
      }
  }
*/
constructor(numVertices){
  this.adjMatrix = new Array(numVertices).fill(0).map(() => new Array(numVertices).fill(0));
}
addEdge(vertex1,vertex2){
  this.adjMatrix[vertex1][vertex2] = 1;
  this.adjMatrix[vertex2][vertex1] = 1;
}
printGraph(){
  console.log(this.adjMatrix)
}

}
let g = new Graph(5);
g.addEdge(0,4)
g.printGraph();

/*
let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('LosAngeles');
g.addVertex('Hongkong');
g.addVertex('Paris');
// console.log(g);
//edges(u,v)
g.addEdge('Dallas','Tokyo');
g.addEdge('Dallas','Aspen');
g.addEdge('Hongkong','Tokyo');
g.addEdge('Hongkong','Dallas');
g.addEdge('LosAngeles','Tokyo');
g.addEdge('LosAngeles','Hongkong');
g.addEdge('LosAngeles','Aspen');
g.addEdge('Paris','Dallas');
g.addEdge('Paris','Aspen');
g.addEdge('Paris','LosAngeles');
// console.log(g);
g.printGraph();
*/
