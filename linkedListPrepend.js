class node{
    constructor (value){
        this.value = value
        this.next= null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }
    preppend(value){
        let newNode = new node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
}


let lst = new linkedList()
console.log("is Empty",lst.isEmpty())
console.log("size of the list",lst.getSize());
lst.preppend(45)
lst.preppend(89)
lst.preppend(45)

