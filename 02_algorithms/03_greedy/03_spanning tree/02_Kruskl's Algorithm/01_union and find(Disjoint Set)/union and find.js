//disjoint sets
//union and find
class UnionFind{
  constructor(elements){
      this.count = elements.length;//number of disconnected graphs
      this.parent = {}; // To keep track of connected graphs
      // Initialize the datastructure such that all elements have themselves as parents
      elements.forEach( e => this.parent[e] = e);
  }
  union(vertex1, vertex2){
      let vertex1Parent = this.find(vertex1);
      let vertex2Parent = this.find(vertex2);
      
      if(vertex1Parent === vertex2Parent) // roots are same that is they are alread in same tree
          return;
      if(vertex1Parent < vertex2Parent){
          if(this.parent[vertex2] !== vertex2 )
              this.union(this.parent[vertex2], vertex1);
          this.parent[vertex2] = this.parent[vertex1];
      } else {
          if(this.parent[vertex1] !== vertex1)
              this.union(this.parent[vertex1], vertex2);
          this.parent[vertex1] = this.parent[vertex2];
      }
  }
  find(vertex){
      while(this.parent[vertex] != vertex)
          vertex = this.parent[vertex];
      return vertex;
  }
}
let uf = new UnionFind(['a','b', 'c','d','e']);
// Console.log(uf.parent);
uf.union('a', 'b');
uf.union('a', 'c');
uf.union('c', 'd');
console.log(uf.parent);