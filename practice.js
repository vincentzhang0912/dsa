class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  //adding a new node to the end of the linked list
  //push method should accept a value
  //create a new node using value passed to the method
  //if there is no head property(i.e head is null) on the sll, set the head and tail to be the newly created node
  //otherwise set the neaxt property of tail to be the newly created node
  //increment the length property
  //return the linked list
  push(data){
      let newNode = new Node(data);
      
      if(!this.head){
          this.head = newNode;
          // this.tail = newNode;
          this.tail = this.head;
      }
      else{
          this.tail.next = newNode;
          this.tail = newNode;
      }
     
      
      this.length++;
      return this;
  }

  
  pop(){
      if(!this.head)
          return undefined;
      else if(this.head === this.tail){
          let poppedValue = this.head.data;
          
          this.head = null;
          this.tail = null;
          this.length--;
          
          return poppedValue;
      }
      else{
          let currentNode = this.head;
          let newTail = currentNode;
          
          while(currentNode.next){
              newTail = currentNode;
              currentNode = currentNode.next;
              
          }
          
          this.tail = newTail;
          this.tail.next = null;
          this.length--;
          
          //return currentNode;
          let poppedValue =  currentNode.data;
          console.log(currentNode.next);
          console.log(currentNode);

          return poppedValue;
      }
  }

}
let sll = new SinglyLinkedList();
// console.log(sll.pop());
sll.push(10);
// console.log(sll.pop());
sll.push(20);

sll.pop();

// console.log(sll);




