class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    preppend(value){
        let newNode = new Node(value)
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
            console.log("list is empty")
        }else{
            let current=this.head
            let listItems=''
            while (current) {
                listItems += `${current.value} `
                current = current.next
            }

            console.log(listItems)
        }
    }
}


let lst = new linkedList()
console.log("list is empty",lst.isEmpty())
console.log("size of the list (starting)",lst.getSize())

lst.preppend(50)
lst.preppend(40)
lst.preppend(60)
lst.preppend(70)


console.log("size of the list",lst.getSize())
lst.print()