class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
      const newNode = new Node(value)
      if(this.isEmpty()){
        this.root = newNode
      }else{
        this.insertNode(this.root,newNode)
      }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }

    }
    preOrder(root){
      if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
      }
     }

    
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(12)
bst.insert(9)
bst.insert(3)


console.log(bst.root);
bst.preOrder(bst.root)


