//Doubly linked list

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(data){
    let newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  size(){
    return this.length;
  }

  pop(){
    if(!this.head)
      return undefined;
    let poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode.data
  }

  printForward(){
    let currentNode = this.head;
    while(currentNode){
    console.log(currentNode.data);
    currentNode = currentNode.next;
    }
    
  }
  printReverse(){
    let currentNode = this.tail;
    while(currentNode){
    console.log(currentNode.data);
    currentNode = currentNode.prev;
    }
  }

  unshift(data){
    let newNode = new Node(data);
    
    if(this.head === null && this.tail === null){//if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    }else{
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    
    this.length++;
    return this;
  }

shift(){
    if(this.length === 0)
        return undefined;
    let oldNode = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.head = oldNode.next;
        oldNode.next = null;
        this.head.prev = null;
    }
    
    this.length--;
    return oldNode.data;
  }
  get(index){
    if(index <= 0 || index > this.length){
      return null;
    } 
    let currentNode,counter;
    if(index <= this.length/2){
      //head to tail
      currentNode = this.head;
      counter = 1;
      while(counter !== index){

      }

    }
  }


}



let dll= new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);

// console.log(dll);
// console.log(dll.size())
// console.log("popped Value:" , dll.pop())
// console.log(dll.printForward())
// console.log(dll.printReverse())
dll.unshift(100)
dll.printForward()
dll.shift()
dll.printForward()