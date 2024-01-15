class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor() {
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
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertValue(newNode,root.left)
            }
        }else{
            if(root.right==null){
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
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    perOrder(root){
        if(root){
            console.log(root.value);
            this.perOrder(root.left)
            this.perOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
}



let bst=new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// bst.perOrder(bst.root)
bst.inOrder(bst.root)