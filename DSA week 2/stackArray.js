class ArrayStack{
    constructor(){
        this.item=[]
    }
    push(value){
        this.item.push(value)
    }
    pop(){
        this.item.pop()
    }
    getSize(){
        return this.item.length
    }
    isEmpty(){
        return this.item.length==0
    }
    peek(){
        console.log(this.item[this.getSize()-1]);
    }
    print(){
        if(this.getSize()==0){
            console.log('stack UnderFlow');
        }else{
            console.log(this.item.join('->'));
        }
    }
}


let stack=new ArrayStack()
stack.push(15)
stack.push(25)
stack.pop()
stack.pop()
// stack.pop()
stack.print()
console.log(stack);