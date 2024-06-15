
class Node {
  constructor(value){
    this.value = value;//node value
    this.left = null;//left node
    this.right = null;//right node
  }
}

function levelOrder(){
  let q = [];
  q.push(root);

  while(q.length !== 0){
    let temp = q.shift();
    console.log(temp.value);

    if( temp.left !== null){
      q.push(temp.left)
    }
    if(temp.right !== null){
      q.push(temp.right)
    }
  }
}

let root = new Node(20);
root.left = new Node(10);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(45);
root.right.right = new Node(55);

// console.log(root);
levelOrder();
