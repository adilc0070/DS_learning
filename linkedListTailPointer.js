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
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
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
        let curr=this.head
        let listItems=''

        while(curr){
            listItems+=`${curr.value} `
            curr=curr.next
        }
        console.log("listItem \n",listItems);
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        let value=this.head.value
        this.head=this.head.next
        this.size--
        return value
    }
    removeFromLast(){
        if(this.isEmpty()){
            return null
        }
        let value=this.tail.value
        if(this.size===0){
            this.head=null
            this.tail=null
        }else{
            let prev=this.head
            while(prev.next !==this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }
        this.size--
        return value
    }
}

let newList=new LinkedList()
newList.prepend("adil")
newList.prepend(10)
newList.prepend(15)
newList.apend(9)
newList.apend(45)
// newList.removeFromFront()
// newList.removeFromLast()
// newList.removeFromFront()
// newList.removeFromFront()
console.log(newList);
console.log("sizeOf :",newList.getSize());
newList.print()