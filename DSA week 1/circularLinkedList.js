class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}

class CircularLinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            newNode.next=this.head
        }else{
            let curr=this.head
            while(curr.next !=this.head){
                curr=curr.next
            }
            curr.next=newNode
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    print(){
        let curr = this.head;
    
        // If the list is not empty
        if (curr) {
            do {
                console.log(curr.value);
                curr = curr.next;
            } while (curr !== this.head);
        }
    }
    reverse() {
        let prev = null;
        let curr = this.head;
    
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
    
        // // Update the head to the last node (prev)
        this.head = prev;
    }

}



const circularList = new CircularLinkedList();
circularList.prepend(3);
circularList.prepend(2);
circularList.prepend(1);

console.log("Original List:");
circularList.print();

circularList.reverse();

console.log("Reversed List:");
circularList.print();
