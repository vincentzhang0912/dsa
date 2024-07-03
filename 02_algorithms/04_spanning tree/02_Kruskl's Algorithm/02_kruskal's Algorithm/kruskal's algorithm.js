//Kruskal's algorithm
class Graph{
  constructor(vertices){
      this.vertices = vertices;
      this.edges = [];
  }
  addEdge(u,v,w){
      this.edges.push({u,v,w});
  }
  find(parent, vertex){
      if(parent[vertex] === vertex)
          return vertex;
      return this.find(parent, parent[vertex]);
      
  }
  union(parent, rank, u, v){
      let uRoot = this.find(parent, u);
      let vRoot = this.find(parent, v);
      
      if(rank[u]<rank[v])
          parent[uRoot] = vRoot;
      else if(rank[u]>rank[v])
          parent[vRoot] = uRoot;
      else{
          parent[vRoot] = uRoot;
          rank[uRoot]++;
      }
  }
  kruskalMST(){
      let mst = [];
      let parent = []; //to keep track of connected graphs
      let rank = new Array(this.vertices).fill(0);
      //initialize the datastructure such that all elements have themselves as parents
     for(let v = 0; v < this.vertices; v++)
         parent[v] = v;
      //sort the edges in ascending order
      this.edges.sort((a,b)=>a.w - b.w);
      
      let mstCost = 0;
      let e = 0;
      while(mst.length < this.vertices-1){
          let {u,v,w} = this.edges[e];
          let uParent = this.find(parent, u);
          let vParent = this.find(parent, v);
          
          if(uParent!=vParent){
              this.union(parent, rank, u,v);
              mst.push({u,v,w});
              mstCost = mstCost + w;
          }
          e++;
      }
      
      // console.log(mst);
      console.log("Edge   Weight");
      mst.forEach(edge => console.log("(" + edge.u + "-" + edge.v + ")" + "    " + edge.w));
      console.log("Total cost: ",mstCost);
  }
}
let g =  new Graph(5);
g.addEdge(0,1,2);
g.addEdge(0,3,6);
g.addEdge(1,2,3);
g.addEdge(1,3,8);
g.addEdge(1,4,5);
g.addEdge(2,4,7);
g.addEdge(3,4,9);

// console.log(g.edges);
g.kruskalMST();
// console.log(g.edges);
