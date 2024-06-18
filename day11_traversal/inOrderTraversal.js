/* Given the root of a binary tree, 
return the in-order traversal of its nodes' values.


NOTE : Refer Hint for tree representation of given input

*/
class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

function inOrder(root){
    //Write your code here and return an array
    if(root === null)
        return [];
    const leftValues = inOrder(root.left);
    const rightValues = inOrder(root.right);
    return [...leftValues, root.data, ...rightValues];
    
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(inOrder(root));

