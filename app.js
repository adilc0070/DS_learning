class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
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
let bst=new BST()
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)
bst.insert(6)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(-1)
bst.insert(-2)
bst.insert(-3)
bst.insert(1)



console.log(bst);