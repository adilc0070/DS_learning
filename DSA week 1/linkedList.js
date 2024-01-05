// creating linked list not have values 

class node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedLIst{
    constructor(){
        this.head= null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }
}


let List = new LinkedLIst()

console.log("list is empty",List.isEmpty());
console.log("list size",List.getSize());