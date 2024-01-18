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
    preOreder(root){
        if(root){
            console.log(root.value);
            this.preOreder(root.left)
            this.preOreder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    bfs(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
}