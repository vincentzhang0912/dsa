//Breadth First Search Traversal

class Graph{
  constructor(){
      this.nodes = [];
      this.edges = {};
  }
  addVertex(node){
      this.nodes.push(node);
      this.edges[node] = [];
  }
  addEdge(node1, node2){
      this.edges[node1].push({node:node2});
      this.edges[node2].push({node:node1});
  }
  
  
  BFS(node){
      let q = new Queue();
      let visited = [];
      q.enqueue(node);
      visited.push(node);
      while(!q.isEmpty()){
          let del = q.dequeue();
          console.log(del);
          for(let n of this.edges[del]){
              if(!visited.includes(n.node) ){
                //q.items dont have n.node
                
                  q.enqueue(n.node);
                  visited.push(n.node);
              }
          }
      }
  }
}
class Queue{
  constructor(){
      this.items = [];
  }
  enqueue(x){
      this.items.push(x);
  }
  dequeue(){
      return this.items.shift();
  }
  isEmpty(){
      return this.items.length === 0;
  }
}
let g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,3);
g.addEdge(2,4);
console.log(g.nodes);
console.log(g.edges);
g.BFS(1);
console.log("*******");
g.BFS(2);
console.log("*******");
g.BFS(3);
console.log("*******");
g.BFS(4);
