class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

function search(target) {
    if (!root) return false;

    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.data === target) {
            return true;
        }

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }

    return false;
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(search(7)); // true
console.log(search(10)); // false

//recursive implementation
/*

class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

function search(node, target) {
    if (node === null) return false;

    //base case
    if (node.data === target) return true;
    //recursive case
    return search(node.left, target) || search(node.right, target);
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(search(root, 7)); // true
console.log(search(root, 10)); // false


*/
