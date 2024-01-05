class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
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
            this.tail=newNode
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
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list Is Empty');
        }else{
            let curr= this.head
            let listItem=''

            while(curr){
                listItem+=`${curr.value} `
                console.log(curr.value);
                curr=curr.next
            }
        }
    }
    reverse(){
        let prev=null
        let curr = this.head
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
list.apend(5)
list.apend(1+8)
list.apend(1+8*2)
list.apend(1+8*2-5)
list.prepend("test")
list.reverse()
list.print()