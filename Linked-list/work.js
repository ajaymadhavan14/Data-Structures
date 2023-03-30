
class Node {
    constructor(value){
        this.value = value 
        this.next = null
    }
}

export class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    addValue(value){
        const node = new Node(value)
        if(this.head === 0){
          this.head = node
        }else{
            node.next = this.head
            this.head = node        
        }
        this.size++
    }

    display(){
        let listValue = ''
        let curr = this.head
        while (curr) {
            listValue += `${curr.value} `
            curr = curr.next
        }
        console.log(listValue);
    }

    removeValue(value){
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }else{
            let removedNode
            let curr = this.head
            console.log(curr.value);
            console.log(curr.next.value);
            while (curr.next && curr.next.value !== value ) {
                curr = curr.next
              
            }
            if(curr.next){
                removedNode = curr.next 
                curr.next = removedNode.next
            }
           
            this.size--
        }
    }
}
const list = new Linkedlist()


// list.addValue(10)
// list.addValue(20)
// list.addValue(30)
// list.display()
// list.removeValue(20)
// list.display()

class Stack{
  push(value){
    list.addValue(value)
  }
}
const stack = new Stack()
stack.push(10)
list.display()
