//Circular Queue
class CircularQueue{
  constructor(capacity){
      this.items = new Array(capacity);
      this.rear = -1;
      this.front = -1;
      this.currentLength = 0;
      this.capacity = capacity;
  }
  
  isFull(){
      return this.currentLength === this.capacity;    
  }
  
  isEmpty(){
      return this.currentLenght === 0;
  }
  
  //number of current elements
  size(){
      return this.currentLength;
  }
  
  enqueue(data){
      if(this.isFull()){
          console.log("Queue is full");
          return;
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = data;
      this.currentLength++;
      
      if(this.front === -1)
          this.front = this.rear;
  }
  
  front(){
      if(this.isEmpty())
          return null;
      return this.items[this.front];
  }
  
  dequeue(){
      if(this.isEmpty())
          return null;

      const deletedElement = this.items[this.front];
      this.items[this.front] = null;
      this.front =(this.front + 1) % this.capacity;
      this.currentLength--;
      
      
      return deletedElement;
  }
  
 print(){
      // console.log(this.items.toString());
      if(this.isEmpty()){
          console.log("Queue is empty");
          return;
      }
      
      let res = '';
      let i;
      for(i = this.front; i != this.rear; i = (i+1)%this.capacity){
          res = res + this.items[i]+ " ";
      }
      res = res + this.items[i];
      console.log(res);
  }

}

let cq = new CircularQueue(5);
// console.log(cq.items);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.print();
cq.enqueue(60);
console.log(cq.dequeue()); //10
cq.enqueue(60);
cq.print();


