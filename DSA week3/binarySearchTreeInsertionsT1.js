class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(newNode,this.root)
        }
    }
    insertNode(newNode,root){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(newNode,root.left)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(newNode,root.right)
            }
        }
    }
}


let bst=new BinarySearchTree()
bst.insert(20)
bst.insert(21)
bst.insert(18)
bst.insert(15)
bst.insert(14)
console.log(bst.root.left);