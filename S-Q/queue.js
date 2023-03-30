class Queue {
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        this.items.shift()
    }
    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()