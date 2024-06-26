//Tree implementation

class Node {
  constructor(value){
    this.value = value;//node value
    this.left = null;//left node
    this.right = null;//right node
  }
}
let root = new Node(20);
root.left = new Node(10);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(45);
root.right.right = new Node(55);

console.log(root);

