class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}

class DoublyLinkedList{
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
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    apend(value){
        if(this.isEmpty()){
            this.prepend(value)
        }else{
            let newNode=new Node(value)
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
            newNode.prev=curr
        }
        this.size++
    }

    print() {
        let current = this.head;
        const result = [];

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(' <-> '));
    }
    insert(value,index){
        if(index<0||index>this.size){
            return null
        }
        let newNode=new Node(value)
        if(index===0){
            newNode.next=this.head
            if(this.head){
                this.head.prev=newNode
            }
            this.head=this.head
        }else{
            let curr=this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            newNode.next=curr.next
            newNode.prev=curr

            if(curr.next){
                curr.next.prev=newNode
            }
            curr.next=newNode
        }
        this.size++
    }
}


let list=new DoublyLinkedList()
list.prepend(51)
list.prepend(65)
list.apend(458)
list.prepend(14)
list.apend(45)
list.insert(1,1)
console.log("sizeof",list.getSize());

list.print()