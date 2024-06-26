//Tree construction using class
//Tree implementation

class Node{
  constructor(value){
      this.value = value; //node value
      this.left = null; //left node
      this.right = null; //right node
  }
}

class Tree{
  constructor(){
      this.root = null;
  }
  
  insert(key){
      if(this.root === null)
          this.root = new Node(key);
      else{
          let q = [];
          q.push(this.root);
      
          while(q.length!==0){    
              let temp = q.shift();
              
              if(temp.left === null){
                  temp.left = new Node(key);
                  break;
              }
              else
                  q.push(temp.left);
                  
              if(temp.right === null){
                  temp.right = new Node(key);
                  break;
              }
              else
                  q.push(temp.right);
          }
      }
  }
  
  levelOrder(){
      let q = [];
      q.push(this.root);
  
      while(q.length!==0){
          let temp = q.shift();
          console.log(temp.value);
      
          if(temp.left!==null)
              q.push(temp.left);
          
          if(temp.right!==null)
              q.push(temp.right);
      }
  }
}

let myTree = new Tree();
myTree.insert(1);
myTree.insert(2);
myTree.insert(3);
myTree.insert(4);

// console.log(myTree);
myTree.levelOrder();
