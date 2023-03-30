class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    this.items.pop();
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.print();
stack.pop();
stack.print();
