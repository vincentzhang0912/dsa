

//Write your code here
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
  //if there is no head property(i.e head is null) on the list,set the head and tail to be
  //the newly created node
  //otherwise set the next property of tail to be the newly
  //created node 
  //increment the length property
  //return the linked list
  push(data){
      let newNode = new Node(data);
      if (!this.head) {
          
          this.head = newNode;
          this.tail = this.head;
          
      } else {
          this.tail.next =  newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }


  
  traverse(){
      if(!this.head){
          return undefined;
      }
      let curr = this.head;
      while(curr){
          console.log(curr.data);
          curr=curr.next;
      }
  }
  //pop():removing a node from the end of the linked list
  //if there are no node in the linked list,return undefined
  //if there is only one node,pop the value and update head and tail to null
  //otherwise,loop through the linked list untill you reach tail and pop the node
  pop(){
      if(!this.head){
          return undefined ;
      }
      else if(this.head === this.tail){
          console.log(this.head.data);
          this.head = null;
          this.tail = null;
          this.length = 0;
      }
      else {
          let curr = this.head;
          let newtail = this.head;
          while(curr.next){
              newtail = curr ;
              curr = curr.next ;
          }
          this.tail = newtail;
          newtail.next = null;
          console.log(curr.data);
          this.length--;
      }
  }
}


let list = new SinglyLinkedList();
list.push(2);
list.push(1);
list.push(8);
list.traverse(); //Output : 2 1 8

list.pop(); //Output : 8
list.push(9); 
list.pop(); //Output : 9
list.pop(); //Output : 1
list.traverse(); //Output : 2
