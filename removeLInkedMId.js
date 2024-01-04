class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("empty");
        }else{
            let curr=this.head
            let listItem=''

            while(curr){
                listItem+=`${curr.value} `
                curr=curr.next
            }
            console.log("list Items:\n",listItem);
        }
        
    }
    removeMid(){
        if(this.isEmpty()){
            return null
        }else{
            let removedItem
            let mid=Math.floor(this.getSize()/2)
            let curr=this.head
            for(let i=0;i<mid-1;i++){
                curr=curr.next
            }
            removedItem=curr.next
            curr.next=removedItem.next
            this.size--
        }
    }
    removeValue(value){
        if(this.isEmpty()){
            return 
        }else{
            let removedItme
            if(this.head.value==value){
                removedItme=this.head
                this.head=this.head.next
            }else{
                let curr=this.head
                while(curr.next && curr.next.value!=value){
                    curr=curr   
                }
            }
        }
    }
}

let newList=new LinkedList()
newList.prepend(5)
newList.prepend(5)
newList.prepend(9)
newList.prepend(5)
newList.prepend(5)

newList.removeMid()
newList.print()