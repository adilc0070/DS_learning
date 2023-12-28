class Node{
    constructor(value){
        this.value=value
        this.next= null
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
        if(this.isEmpty()){
            this.head=new Node(value)
        }else{
            let newNode= new Node(value)
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    apend(value){
        let newNode= new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let current = this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
        }
        this.size++
    }
    
    insert(value,index){
        if(index<0|| index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            let newNode= new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next
            prev.next=newNode
        }
        this.size++

    }

    search(value){
        let i=0, curr=this.head
        if(this.head.value===value){
            return i
        }else{
            while(curr){
                if(curr.value===value){
                    return i
                }
                curr=curr.next
                i++
            }
            return -1
        }
    }
     
    removeAt(index){
        if(index<0||index>this.size){
            return null
        }
        let removeThis
        if(index==0){
            removeThis=this.head
            this.head=removeThis.next
            this.size--
            return `value deleted: ${removeThis.value}`
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeThis=prev.next
            prev.next=removeThis.next
            this.size--
            return `value deleted: ${removeThis.value}`
        }
    }

    removeThis(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return `removed item: ${value}`
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!=value){
                prev=prev.next
            }
            if(prev.next){
                let removeNode=prev.next
                prev.next=removeNode.next
                this.size--
                return `removed item: ${removeNode.value}`
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
    print(){
        if(this.isEmpty()){
            console.log("is Empty");
        }else{
            let listItems=''
            let curr=this.head
            while(curr){
                listItems+=`${curr.value} `
                curr=curr.next
            }
            console.log(listItems);
        }
    }
}



let list=new LinkedList()

list.prepend(9)
list.prepend(4)
list.prepend(8)
list.prepend(5)
list.prepend(4)
list.prepend(6)
list.reverse()
list.removeAt(5)
list.removeThis(5)
list.print()
