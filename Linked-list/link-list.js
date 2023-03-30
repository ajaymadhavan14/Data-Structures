class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      // console.log(this.head);
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
        // console.log(prev);
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  search(value) {
    let i = 0;

    if (this.head.value === value) {
      return i;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i + 1;
        }
        curr = curr.next;
        i++;
      }
    }
    return -1;
  }

  removeValue(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let removedNode;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  display() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listVlaue = "";
      while (curr) {
        listVlaue += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listVlaue);
    }
  }

  last() {
    console.log(this.head);
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log("list is empty ", list.isEmpty());
console.log("list size ", list.getSize());
list.display();
list.append(100);
list.display();
list.insert(200, 2);
list.display();
list.removeFrom(2);
list.display();
list.removeValue(1);
list.display();
console.log(list.search(200));
list.reverse();
list.display();
