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

  insertNode(value){
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while(true){
      if(value === current.val){
        return undefined;
      }
      if(value < current.val){
        if(current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
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
    queue.push(node);
    while(queue.length){
      node = queue.shift();
      result.push(node.val);
      if(node.left)
        queue.push(node.left);
      if(node.right)
        queue.push(node.right);
    }
    return result;
  }

  preOrder(){
    let result = [];
    function traverse(node){
      result.push(node.val);
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
        traverse(node.left);
      }
      result.push(node.val);
      if(node.right){
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  postOrder(){
    let result = [];
    function traverse(node){
      if (node.left){
        traverse(node.left);
      }
      if (node.right){
        traverse(node.right);
      }
      result.push(node.val);
    }
    traverse(this.root);
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

  isBST(node = this.root){
    const validate = (node, min, max) =>{
      if (node === null){
          return true;
      }
      if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
          return false;
      }
      return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };
    return validate(node, null, null);
  }

  delete(value){
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value){
    if(root === null)
        return root;
    if(value < root.val)
        root.left = this.deleteNode(root.left, value);
    else if(value > root.val)
        root.right = this.deleteNode(root.right, value);
    else {
        // Case 1: node with no child
        if(!root.left && !root.right)
            return null;
        // Case 2: node with one child
        if(!root.left)
            return root.right;
        else if(!root.right)
            return root.left;
        // Case 3: node with two children
        root.val = this.min(root.right);
        root.right = this.deleteNode(root.right, root.val);
    }
    return root;
  }
}

let bst = new BinarySearchTree();
bst.insertNode(50);
bst.insertNode(30);
bst.insertNode(20);
bst.insertNode(40);
bst.insertNode(70);
bst.insertNode(60);
bst.insertNode(80);
console.log(bst.inOrder());
bst.delete(70);
console.log(bst.inOrder());
