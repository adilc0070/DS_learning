class Stack{
    constructor(){
        this.items = []
    }
    getSize(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length===0
    }
    push(value){
        this.items.push(value)
    }
    print(){
        for(let i=0;i<this.items.length;i++){
            console.log(this.items[i]);
        }
    }

    deleteMid(){
        let Mid=Math.floor(this.items.length/2)
        for(let i=Mid;i<this.items.length-2;i++){
            this.items[i]=this.items[i+1]
        }
    }
    min(){
        return `min element ${Math.min(...this.items)}`
    }
}

let stack=new Stack()
stack.push(1)
stack.push(15)
stack.push(10)
stack.push(15)
stack.push(1)
stack.deleteMid()
console.log(stack.min())
stack.print()
// console.log(stack);