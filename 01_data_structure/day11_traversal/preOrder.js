class Node{
  constructor(val){
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function preOrder(root){
  //Write your code here and return an array
  //iterative approach
  
  if(root ===null)
      return null;
  let result = [];//to store visited nodes
  let stack = [];
  
  stack.push(root);
  while(stack.length !== 0){
      let current = stack.pop();
      result.push(current.data);
      
      if(current.right !== null)
          stack.push(current.right);
      if(current.left !== null)
          stack.push(current.left);
  }
  return result;

}

//resursive approach
function preOrder(root){
  if(root === null)
      return [];
  const leftValues = preOrder(root.left);
  const rightValues = preOrder(root.right);
  return [root.data,...leftValues, ...rightValues]
}

//recursive approach 02
/*
preOrder(){
  let result = [];
  function traverse(node){
    result.push(node.value)
    if (node.left){
      traverse(node.left);
    }
    if (node.right){
      traverse(node.right);
    }
  }
  traverse(this.root);
  return result
}
  */
let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(preOrder(root));