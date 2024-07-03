/* Write a JS program to find the shortest path between two nodes.

Expected Output :
-----------------
displaying the graph                                                                                                    
1 -> 2,3,4                                                                                                              
2 -> 1,3                                                                                                                
3 -> 1,2,4                                                                                                              
4 -> 3,1                                                                                                                
                                                                                                                        
shortest path between 2 and 4 is                                                                                        
13

*/
class Queue{
  constructor()
  {
      this.items = [];
  }
  enqueue(element){
      this.items.push(element);
  }
  dequeue(){
      if(this.isEmpty())
          return "Underflow";
      return this.items.shift();
  }
  front(){
      if(this.isEmpty())
          return "No elements in Queue";
      return this.items[0];
  }
  isEmpty(){
      return this.items.length === 0;
  }
  length(){
      return this.items.length;
  }
  printQueue(){
  var str = "";
  for(var i = 0; i < this.items.length; i++)
      str += this.items[i] +" ";
  return str;
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

 addDirectedEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight });
 }
 display() {
    let graph = "";
    this.nodes.forEach(node => {
       graph += node + " -> " + this.edges[node].map(n => n.node).join(",") + "\n";
    });
    console.log(graph);
 }
 
  BFSShortestPath(n1, n2) {
      //Write your code and return the shortest distance
      let distances = {};
      let queue = new Queue();
      let visited = new Set();
      
      for (let node of this.nodes) {
          distances[node] = Infinity;
      }
      
      distances[n1] = 0;
      queue.enqueue(n1);
      visited.add(n1);
      
      while (!queue.isEmpty()) {
          let currentNode = queue.dequeue();
          for (let neighbor of this.edges[currentNode]) {
              if(!visited.has(neighbor.node)){
                  let distance = distances[currentNode] + neighbor.weight;
                  if (distance < distances[neighbor.node]) {
                      distances[neighbor.node] = distance;
                      queue.enqueue(neighbor.node);
                      visited.add(neighbor.node);
                  }
              }
          }
      }
      return distances[n2];
  }
  
}

let gg=new Graph();
gg.addNode(1);
gg.addNode(2);
gg.addNode(3);
gg.addNode(4);
gg.addEdge(1,2,5);
gg.addEdge(1,3,14);
gg.addEdge(2,3,5);
gg.addEdge(3,4,12);
gg.addEdge(1,4,8);
console.log("displaying the graph");
gg.display();

console.log("shortest path between 2 and 4 is ");
console.log(gg.BFSShortestPath(2,4));