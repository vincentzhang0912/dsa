class Stack{
  constructor(){
      this.stack = [];
  }
  push(item){
      this.stack.push(item);
  }
  pop(){
      return this.stack.pop();
  }
  isEmpty(){
     return this.stack.length === 0;
  }
}
class Graph {
 constructor() {
    this.edges = {};
    this.nodes = [];
 }

 addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
 }

 addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
 }

 DFS(node) {
      //Write your code here
      let st = new Stack();
      let explored = new Set();
      st.push(node);
      explored.add(node);
      while(!st.isEmpty()){
          let poppedNode = st.pop();
          console.log(poppedNode);
          for(let n of this.edges[poppedNode]){
              if(!explored.has(n.node)){
                  explored.add(n.node);
                  st.push(n.node);
              }
          }
      }
  }
  
}

let gg=new Graph();
gg.addNode(1);
gg.addNode(2);
gg.addNode(3);
gg.addNode(4);
gg.addEdge(1,2);
gg.addEdge(1,3);
gg.addEdge(2,3);
gg.addEdge(3,4);
gg.addEdge(1,4);
gg.DFS(1);
gg.DFS(2);
gg.DFS(3);
gg.DFS(4);
