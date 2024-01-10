// class QueueArray{
//     constructor(){
//         this.items=[]
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
//     getSize(){
//         return this.items.length
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         this.items.shift()
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('queue is empty');
//         }else{
//             console.log(this.items.join(' <- '));
//         }
//     }
//     front(){
//         this.items.length>0 ? console.log(this.items[0]) : console.log(null);
//     }
//     peek(){
//         this.items.length>0 ? console.log(this.items[this.getSize()-1]) : console.log(null);
//     }
// }

// let queue=new QueueArray()
// queue.enqueue(15)
// queue.enqueue(25)
// queue.front()
// queue.peek()
// queue.dequeue()
// queue.print()

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class QueueLinkedList{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    enQueue(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.front=newNode
            this.rear=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
        this.size++
    }
    deQueue(){
        if(this.isEmpty()){
            return 
        }else if(this.getSize()==1){
            this.front=null
            this.rear=null
        }else{
            this.front-this.front.next
        }
        this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }else{
            let curr=this.front
            let items=[]
            while(curr){
                items.push(curr.value)
                curr=curr.next
            }
            console.log(items.join(' <- '));
        }
    }
    first(){
        this.front ? console.log(this.front.value): console.log(null)
    }
    peek(){
        this.rear ? console.log(this.rear.value):console.log(null);
    }
}

let queue=new QueueLinkedList()
queue.enQueue(45)
queue.enQueue(55)
queue.first()
queue.peek()
queue.deQueue()
queue.print()