//The base case is the condition where we stop the recursion:
//The recursive case is where the function calls itself to continue the search in the subtrees:


//Pre-order Search

function preOrderSearch(node, target) {
  // base case
  if (node === null) return false;
  if (node.data === target) return true;
  // recursive case
  return preOrderSearch(node.left, target) || preOrderSearch(node.right, target);
}

//In-order Search

function inOrderSearch(node, target) {
  //base case
  if (node === null) return false;
  // recursive case
  if (inOrderSearch(node.left, target)) return true;
  if (node.data === target) return true;
  return inOrderSearch(node.right, target);
}
//Post-order Search

function postOrderSearch(node, target) {
  if (node === null) return false;
  if (postOrderSearch(node.left, target)) return true;
  if (postOrderSearch(node.right, target)) return true;
  return node.data === target;
}
