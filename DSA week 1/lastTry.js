class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size==0
    }

    print(){
        if(this.isEmpty()){
            console.log('list is Empty');
        }else{
            let curr=this.head
            while(curr){
                console.log(curr.value);
                curr=curr.next
            }
        }
    }
    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    apend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }
    rev(){
        let prev=null
        let curr=this.head
        this.tail=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
        this.print()
    }
    remove(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
    
        let removed;
    
        if (this.size === 1) {
            removed = this.head.value;
            this.head = null;
            this.tail = null;
        } else if (index === 0) {
            removed = this.head.value;
            this.head = this.head.next;
        } else {
            let prev = this.head;
    
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
    
            removed = prev.next.value;
            prev.next = prev.next.next;
    
            if (index === this.size - 1) {
                this.tail = prev;
                this.tail.next = null; 
            }
        }
    
        this.size--;
    
        return `Removed value: ${removed} at index: ${index}`;
    }
    removeMid() {
        if (this.size === 0) {
            console.log("List is empty.");
            return;
        }
    
        let mid = Math.floor(this.size / 2);
        let removed;
    
        if (this.size === 1) {
            removed = this.head.value;
            this.head = null;
            this.tail = null;
        } else {
            let prev = null;
            let curr = this.head;
            let i = 0;
    
            while (i < mid) {
                prev = curr;
                curr = curr.next;
                i++;
            }
    
            removed = curr.value;
            prev.next = curr.next;
    
            if (mid === Math.floor((this.size - 1) / 2)) {
                this.tail = prev;
                if (this.tail !== null) {
                    this.tail.next = null; // Ensure the tail's next pointer is set to null
                }
            }
        }
    
        this.size--;
    
        console.log(`Removed middle value: ${removed}`);
    }
    
    
}



let newList=new LinkedList()
newList.prepend(5)
newList.prepend(15)
newList.prepend(25)
newList.apend(35)
newList.apend(45)


console.log('listItems:');
newList.print()

console.log('reversedList:');
newList.rev()

// console.log(newList.remove(2));
// newList.removeMid()
newList.print()
console.log(newList);

