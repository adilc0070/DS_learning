class Queue{
    constructor (){
        this.items=[]
    }
    isEmpty(){
        return this.items.length==0
    }
    getSize(){
        return this.items.length
    }
    enqueue(value){
        this.items.push(value)
    }
    deQueue(){
        this.items.shift()
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is Empty");
        }else{
            console.log(this.items.join('<-'));
        }
    }
    front(){
        console.log(this.items[0]);
    }
    back(){
        console.log(this.items[this.getSize()-1]);
    }
}


let Quee=new Queue()
Quee.enqueue(15)
Quee.enqueue(25)
// Quee.deQueue()
// Quee.deQueue()
Quee.enqueue(48)
Quee.print()
Quee.front()
Quee.back()

console.log(Quee);