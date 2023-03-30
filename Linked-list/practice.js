class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  addValue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  display() {
    let curr = this.head;
    let listVlaue = "";
    while (curr) {
      listVlaue += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listVlaue);
  }
}

const list = new Linklist();
list.addValue(10);
list.addValue(20);
list.addValue(100);
list.display();
