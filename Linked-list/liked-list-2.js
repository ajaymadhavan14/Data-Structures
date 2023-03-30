class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeHead() {
    if (this.size === 0) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }
  removeEnd() {
    if (this.size === 0) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  print() {
    let curr = this.head;
    let listVlaue = "";
    while (curr) {
      listVlaue += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listVlaue);
  }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
list.append(100);
list.append(200);
list.append(300);
list.print();
// list.removeHead()
// list.print()
// list.removeEnd()
// list.print()
