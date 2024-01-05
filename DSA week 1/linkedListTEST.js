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
        return this.size==0
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
    apend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("list is Empty");
        }else{
            let curr=this.head
            let ListItems=''
    
            while(curr){
                ListItems+=`${curr.value} `
                curr=curr.next
            }
            console.log("list items:\n",ListItems)
        }
    }
    removeAt(index){
        if(index<0 ||index>=this.size){
            return null
        }let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
    }
    insert(value,index){
        if(index<0||index>this.size){
            return 
        }
        let newNode=new Node(value)
        if(index===0){
            this.prepend(value)
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next
            prev.next=newNode
            this.size++
        }
    }
    removeValue(value){
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return `Removed Value: ${value}`           
        }else{
            let prev=this.head
            let removedNode  
            while(prev.next&&prev.next.value!=value){
                prev=prev.next
            }
            if(prev.next){
                removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return `Removed value: ${removedNode.value}`
            }
        }
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}


let list=new LinkedList()
list.prepend(5)
list.apend(9)
list.prepend(10)
list.insert(78,1)
// console.log(list.removeAt(3))
list.reverse()
list.print()
console.log(list.getSize());