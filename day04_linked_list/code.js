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

  traverse(){
     let currentNode = this.head; 
     while(currentNode){
         console.log(currentNode.data);
         currentNode = currentNode.next;
     }
  }
  
  //pop(): removing a node from the end of the linked list
  //if there are no node in the linked list, return undefined
  //if there is only one node, pop the value and update head and tail to null
  //otherwise, loop through the linked list untill you reach tail and pop the node
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
          return poppedValue;
      }
    }

//unshift: adding a new node to the beginning og the linked list
  //function should accept a value
  //create a new node using the values passed to the function
  //if there is no node in the linked list, set the head and tail to teh newly created node
  //set the newly created nodes next property to the current head property on the linkedlist
  //set the head property on th linked list to the newly created node
  //increment the length by 1
  //return the linked list
    unshift(data) {//insertAtStart(), insertAtHead()
      let newNode = new Node(data);
      
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
          
          this.length++;
          return;
      }
      
      newNode.next = this.head;
      this.head = newNode;
      
      this.length++;
      return this;
    }



//shift: removing the first node in the linked list
  //if there are no nodes, return undefined
  //store the current head property in a varaible
  //store the current head value to a variable
  //set the head property to be the current head's next property
  //decrement lenght by 1
  //return the value of the node removed
  shift(){
      if(!this.head)
          return undefined;
      
      let currentHead = this.head;
      let shiftedValue = this.head.data;
      this.head = currentHead.next;
      currentHead.next = null;
      
      this.length--;
      return shiftedValue;
  }
  
  //size: return the length/number of nodes in the linked list
  size(){
      return this.length;
  }

//get: retrieving the node by its position in the linkedlist
  //function should accept and index/position
  //if index is less than 0 and greater than the length of linkedlist return null
  //loop through the list untill you reach the index position and return the value
  get(index){
      if(index<1 || index>=this.length)
          return null;
      
      let counter = 1;
      let currentNode = this.head;
      
      while(counter !== index){
          currentNode = currentNode.next;
          counter++;
      }
      
      // return currentNode;
      return currentNode.data;
  }

//set: changing the value of a node
  //function should accept two aruguments, index and new value
  //use already defined get() function to find the specific index
  //if the node is found, set the new value to that node property data and return true
  //if the node is not found, return false
  set(index, newValue){
      let nodeFound = this.get(index);
      
      if(nodeFound){
          nodeFound.data = newValue;
          return true;
      }
      
      return false;
  }

//insert: adding a node to the linkedlist at a specific position
  //function sould accept two arguments index and value
  //if index < 0 or index>length then return false
  //if index === length then call push() method
  //if index === 1 then call unshift() method
  //otherwise, using get() method, access the node at the index-1
  //set the next property on that node to the new node
  //set the next property on the newnode to the previous next
  //increment the length
  //return true
  insert(index, data){
      if(index < 0 || index > this.length)
          return false;
      if(index === this.length)
          return this.push(data);
      if(index === 1)
          return this.unshift(data);
      
      let newNode = new Node(data);
      
      let previousNode = this.get(index-1);
      let temp = previousNode.next;
      previousNode.next = newNode;
      newNode.next = temp;
      
      this.length++;
      return true;
  }
  //remove
  remove(data){

    let [previous,current,next] = [null,this.head,thi.head.next];
    while(current.data !== data){
      previous = current;
      current = next;
      next = next.next;
    }
    if(current.data === data){
      previous.next = next;
      this.length--;
      return true
    }
    return false;
  }
}
let sll = new SinglyLinkedList();
// console.log(sll.pop());
sll.push(10);
// console.log(sll.pop());
sll.push(20);
sll.push(30);
sll.push(40);
sll.push(50);

// console.log(sll);

sll.traverse();
//console.log("poppedvalue",sll.pop());
sll.traverse();
sll.unshift(5);
console.log("After unshift");
sll.traverse();
console.log("shifted value : ",sll.shift());
console.log("LL size is : ",sll.size());
console.log(sll.get(4)); //40
console.log(sll.set(3,300)); //true
console.log("after setting");
sll.traverse();
console.log(sll.set(30,300)); //false

