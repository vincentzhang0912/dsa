//Binary Search Tree
//Construct BST
//Node Class
class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  //insertion operation
  insertNode(value){
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while(true){
      if(value === current.val){//to check duplicate value
        return undefined;
      }
      
      if(value < current.val){
        if(current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left
      } else {
        if(current.right === null){
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  bfs(){
    let node = this.root;
    let queue = [];
    let result = [];

    queue.push(node)
    while(queue.length){
      node = queue.shift();
      result.push(node.val);//console.log(node.val;
      if(node.left)
        queue.push(node.left);
      if(node.right)
        queue.push(node.right)
    }
    return result;
  }
  preOrder(){
    let result = [];
    function traverse(node){
      result.push(node.val)
      if (node.left){
        traverse(node.left);
      }
      if (node.right){
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }
  inOrder(){
    let result = [];
    function traverse(node){
      if (node.left){
        traverse(node.left)
      }
      result.push(node.val)
      if(node.right){
        traverse(node.right)
      }
    }
    traverse(this.root)
    return result;
  }
  postOrder(){
    let result = [];
    function traverse(node){
      if (node.left){
        traverse(node.left)
      }
      if (node.right){
        traverse(node.right)
      }
      result.push(node.val)
    }
    traverse(this.root)
    return result;
  }
  max(root = this.root){
    if(!root.right)
        return root.val;
    else
        return this.max(root.right);
}
  min(root = this.root){
    if(!root.left)
        return root.val;
    else
        return this.min(root.left);
}
isBST(node=this.root){
  // Add your Code here and return true/false
 const validate = (node, min, max) =>{
     if (node === null){
         return true;
     }
     
     if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
         return false;
     }
     
     return validate(node.left, min, node.data) && validate(node.right, node.data, max);
 };
 return validate(this.root, null, null);
               
}

}
let bst = new BinarySearchTree();
bst.insertNode(50);
bst.insertNode(40);
bst.insertNode(30);
bst.insertNode(70);
bst.insertNode(100);
/*
console.log(bst);
*/
console.log(bst.bfs())
console.log(bst.preOrder())
console.log(bst.inOrder())
console.log(bst.postOrder())
