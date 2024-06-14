//Deque Operations --> Double Ended Queue -->combination of stack and queue
//Array implementation of Dequeue
class Deque{
  constructor(){
    this.items = []
  }
  //adding an element at the front end
  insertFront(data){
    if(this.items.length === 0)
      this.items.push(data);
    else
      this.items.unshift(data);
  }

  //adding an element at the rear end
  insertRear(data){
    this.items.push(data);
  }

  //removing an element at the front end
  removeFront(){
    return this.items.shift();
  }

  front(){
    return this.items[0];
  }
  rear(){
    //return this.items[this.items.length -1 ]
    return this.items[this.size() - 1]
  }
  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.items.length === 0;
  }
  print(){
    console.log(...this.items);
  }
}let dq = new Deque();
dq.insertFront(100);
dq.insertRear(1000);
dq.print();
dq.insertRear(10000);
dq.insertRear(100000);
dq.insertRear(1000000);
dq.insertRear(10000000);
dq.print();
dq.removeFront(); //100
dq.removeRear(); //10000000
dq.print();
console.log(dq.front()); //1000
console.log(dq.rear()); //1000000
console.log(dq.isEmpty()); //false
console.log(dq.size());//4
