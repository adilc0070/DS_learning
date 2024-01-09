class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.first=null
        this.end=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }

    enQueue(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.first=node
            this.end=node
        }else{
            this.end.next=node
            this.end=node
        }
        this.size++
    }
    deQueue(){
        if(this.isEmpty()){
            return null
        }else if(this.getSize()==1){
            this.first=null
            this.end=null
        }else{
            this.first=this.first.next
        }
        this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty");
        }else{
            let curr=this.first
            let items=[] 
            while(curr){
                items.push(curr.value)
                curr=curr.next
            }
            console.log(items.join('<-'));
        }
    }
    firstIn(){
        
        console.log(this.first.value);
    }
    lastIn(){
        console.log(this.end.value);
    }

}

let queue=new Queue()
queue.enQueue(12)
queue.enQueue(95)
queue.deQueue()
queue.enQueue(48)
queue.enQueue(485)
queue.print()
queue.firstIn()
queue.lastIn()
console.log(queue);