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
        return this.root==null
    }
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertValue(newNode,this.root)
        }
    }
    insertValue(newNode,root){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertValue(newNode,root.left)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertValue(newNode,root.right)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value==value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
}
let bst=new BinarySearchTree()
bst.insert(15)
bst.insert(10)
console.log(bst.search(bst.root,15));