//Queue with array implementation
class Queue{
  constructor(){
    this.items = [];
  }

  //add item to the queue
  enqueue(data){
    this.items.push(data);
  }

  //remove item from the queue
  dequeue(){
    //if (this.items.length === 0) return null;
    if(this.isEmpty())
      return null;
    this.items.shift();
  }

  //to check if queue is empty
  isEmpty(){
    return this.items.length === 0;
  }

  //return the size of the queue
  size(){
    return this.items.length;
  }

  //return the first element in the queue
  front(){
    return this.items[0];
  }

  //return the last element in the queue
  rear(){
    //return this.items[this.items.length - 1]
    return this.items[this.size() - 1]
  }

  //printting the queue elements
  print(){
    //let res = '';
    //for(let i = 0;i < this.items.length; i ++)
    // res = res + this.items[i]+" ";

    //let res = "";
    //for (let elem of this.items)
    //  res += elem + " ";

    //console.log(res);

    console.log(this.items.toString);
    //consol.log(...this.items);
    //console.log(this.items);//not suggestable,since enduser knows the implementation is done using array

  }
}
let q = new Queue();
//console.log(q.dequeue());
q.enqueue(10);
q.enqueue(100);
q.enqueue(1000);
q.print();
// console.log(q.dequeue());
