class Node {
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.top = null;
  }

  push(ele) {
      const newNode = new Node(ele);
      newNode.next = this.top;
      this.top = newNode;
  }
  
  pop() {
      if (this.isEmpty()) {
          return false;
      }
      const poppedValue = this.top.data;  // Corrected property name
      this.top = this.top.next;
      return poppedValue;
  } 
    
  isEmpty() {
      return this.top === null;
  }
}

function decimalValue(n) {
  if (n === 0) return "";

  let s = new Stack();
  let binaryArray = [];

  while (n > 0) {
      const remainder = n % 2;
      s.push(remainder);
      n = Math.floor(n / 2);
  }

  while (!s.isEmpty()) {
      binaryArray.push(s.pop());
  }

  return binaryArray.join(" ");  // Join the array with spaces
}

let readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
let s;

readline.question('', function (line) {
  s = parseInt(line);
  readline.close();
  console.log(decimalValue(s));  // Print the result here
});
