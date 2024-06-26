//Graphs 
class Graph{
  constructor(){
    this.adjacencyList = {};
  }
  //adding a vertex
  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }
}
let g = new Graph();
g.addVertex('Dallas');