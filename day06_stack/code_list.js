class stack {
  constructor(){
      this.stack = [];
      this.top = -1;
  }
  push(element){
      //add the element to the end of the array/stack
      this.stack.push(element)
      this.top++;//increment the top by one
  }
  pop(){
      if (this.top === -1) //if the stack is empty, return null
          return null;
      let elementRemoved = this.stack.pop();
      this.top--;
      return elementRemoved;
  }
  peek(){
      //return the top element(NOTE:should not remove the element)
      if(this.top === -1)
          return null;
      return this.stack[this.top];
  }
  isempty(){
      return this.top === -1;
  }
  //below functionalities are not legal on stack
  size(){
      return this.top+1;
  }
  print(){
      //for(let elem of this.stack)
      //  console.log(elem);
      console.log(this.stack.toString);
  }
  clear(){
      this.stack = [];//this.stack.length = 0;
  }
}
let st = new Stack();
st.push(100);
st.push(200);
st.push(300);
console.log("Size of stack: ",st.size());
console.log("Popped element:",st.pop());
console.log("Size of stack:",st.size());
console.log("Popped element:",st.pop());
console.log("Popped element:",st.pop());
console.log("Popped element:",st.pop());
console.log("Size of stack:",st.size());
console.log(st.peek());//300
console.log(st.isEmpty());
st.print();