//Queue with linkedlist implementation
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null; //initially front of the queue is null;
    this.rear = null; //initially rear of the queue is null;
    this.size = 0
  }

  enqueue(data){
    let newNode = new Node(data);
    //check if the queue is empty
    if(this.size === 0){
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode//newNode is the new rear
      this.size++;//increment the size of the queue
    }
  }

  dequeue(){
    //check if the queue is empty
    if(this.size === 0)
      return null;
    let poppedValue = this.front.data;
    let newFront = this.front.next;
    this.front = newFront; 
    this.front.next = null;
    this.size--;
    return poppedValue;
  }

  getSize(){
    return this.size;
  }

  isEmpty(){
    //return this.size === 0;
    //return this.front === null;
    //return this.rear === null;
    return this.front === null && this.rear === null;
  }

  frontElement(){
    if(this.isEmpty())
      return null;
    return this.front.data;
  }

  rearElement(){
    if(this.isEmpty())
      return null;
    return this.rear.data;
  }
}
let q = new Queue();
console.log(q.isEmpty());
console.log(q.dequeue());
q.enqueue(10);
q.enqueue(100);
q.enqueue(1000);
q.enqueue(10000);
q.enqueue(100000);
console.log(q.getSize());
console.log(q.isEmpty());
console.log(q.frontElement());
console.log(q.rearElement());

console.log("popped value is :", q.dequeue());

