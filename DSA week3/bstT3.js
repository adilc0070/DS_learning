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
            if(root.value==value){
                return true
            }else if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
        
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
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
        while (queue.length) {
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.value)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value       
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root=this.deleteValue(this.root,value)
    }
    deleteValue(root,value){
        if(root==null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteValue(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteValue(root.right)
        }else {
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=min(root.right)
            root.right=this.deleteValue(root.right,root.value)

        }
        return root
    }
}
