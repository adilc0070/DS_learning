// class ArrayStack{
//     constructor(){
//         this.items=[]
//     }
//     getSize(){
//         return this.items.length
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         this.items.pop()   
//     }
//     peek(){
//         console.log(this.items[this.getSize()-1]);
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('stack underFlow');
//         }else{
//             console.log(this.items.join(' -> '));
//         }
//     }
// }


// let stack=new ArrayStack()
// stack.push(45*2)
// stack.push(45*4)
// stack.push(45*7)
// stack.push(45*3)
// stack.push(45*7)
// stack.push(45*8)
// stack.peek()
// stack.pop()
// stack.pop()
// stack.print()
// console.log(stack);


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
let sizeOfStack=5
class StackLinkedList{
    constructor(){
        this.top=null
        this.size=sizeOfStack
    }
    getSize(){
        return sizeOfStack-this.size
    }
    isEmpty(){
        return this.size==sizeOfStack
    }
    push(value){
        if(this.getSize()>=sizeOfStack){
            console.log("stack limit Excied")
            return `stack limit Excied`
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
        let removedValue
        if(this.isEmpty()){
            return null
        }else{
            removedValue=this.top.value
            this.top=this.top.next
        }
        this.size++
        console.log(`${removedValue} popped Out`);
        return `${removedValue} popped Out`
    }
    print(){
        if(this.isEmpty()){
            console.log('stack is empty');
        }else{
            let curr =this.top
            let listItems=[]
            while(curr){
                listItems.push(curr.value)
                curr=curr.next
            }

            console.log(listItems.join(' <- '));
        }
    }
}


let newStack=new StackLinkedList()
newStack.push('a')
newStack.push('b')
newStack.push('c')
newStack.push('d')
newStack.push('e')
newStack.pop()
newStack.print()
console.log(newStack);