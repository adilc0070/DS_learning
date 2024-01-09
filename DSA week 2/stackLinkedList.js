class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
let sizeOfStack=10
class Stack{
    constructor() {
        this.top=null
        this.size=sizeOfStack
    }
    isEmpty(){
        return this.size==sizeOfStack
    }
    getSize(){
        return sizeOfStack-this.size
    }
    push(value){
        if(this.getSize()>=sizeOfStack){
            return 'limit excied'
        }
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.top=newNode
        }else{
            newNode.next=this.top
            this.top=newNode
        }
        this.size--
    }
    pop(){
        let popp=this.top.value
        if(this.isEmpty()){
            return null
        }else{
            popp=this.top.value
            this.top=this.top.next
        }
        this.size++
        return `${popp} popped out`
    }
    print(){
        if(this.isEmpty()){
            console.log("stack is empty");
        }else{
            let curr=this.top
            let stackItems=''
            while(curr){
                stackItems+=`${curr.value} `
                curr=curr.next
            }
            console.log("stackItemsAre:",stackItems);
        }
    }
}




let stack=new Stack()
stack.push(15)
stack.push(20)
stack.push(25)
stack.pop()
stack.push(30)
stack.print()
console.log(stack);