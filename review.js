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
            console.log("list is empty");
        }else{
            let curr=this.head
            let Items=''
            while(curr){
                Items+=`${curr.value} `
                curr=curr.next
            }
            console.log(Items);
        }
    }

    apend(value){
        let newNode= new Node(value)
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
    removeAt(index){
        if(index<0|| index>this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=removedNode.next
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
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return `removed value: ${value}`
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removedNode=prev.next
                prev.next=removedNode.next
                this.size--
                return `removed value: ${removedNode.value}`
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
list.prepend(10)
list.apend(20)
list.prepend(30)
list.apend(40)
list.prepend(50)
list.apend(60)
// console.log(list.removeAt(2))
// list.reverse()
list.print()