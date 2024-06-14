//Priority Queue --> Queue is based on priorities/contraints
//Since array element will store more than one data,we use node as element to store
//so that a node have data along with priority
class Node{
  constructor(data,priority){
    this.data = data;
    this.priority = priority;
  }
}
//Priority Queue using array implementtation
class PriorityQueue{
  constructor(){
    this.items = [];
  }

  //add a new element to the queue
  enqueue(data,priority){
    let newNode = new Node(data, priority);

    //if the queue is empty
    //if (this.items.length === 0)
    //this.items.push(newNode);

    let added = false;
    //enqueueing according to priority
    for(let i = 0;i < this.items.length; i++){
      if(newNode.priority > this.items[i].priority){
        this.items.splice(i, 0,newNode);
        added = true;
        break;
      } 
    }
    if(!added)
      this.items.push(newNode);
  }

  //remove an element from the queue
  dequeue(){
    let removedNode = this.items.shift();
    return removedNode.data;
  }

  front(){
    return this.items[0];//returning node
    //return this.items[0].data;//returning node data
  }

  rear(){
    return this.items[this.items.length - 1];//return node
    //return this.items[this.items.length - 1].data;//return node data
    //return this.items[size - 1].data;//return node data
  }

  size(){
    return this.items.length;
  }
  isEmpty(){
    return this.items.length === 0;
  }
  print(){
    for (let i = 0; i < this.items.length; i++){
      console.log(this.items[i].data + "---" + this.items[i].priority);
    }
      
  }

  
    
}
let pq = new PriorityQueue();
pq.enqueue("abc",5);
pq.enqueue("xyz",10);
pq.enqueue("pqr",7);
pq.enqueue("ijk",2);
pq.enqueue("def",7);
pq.print();
