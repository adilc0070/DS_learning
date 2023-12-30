class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
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
        let newNode= new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.head
            let listItem=''
            while(curr){
                listItem+=`${curr.value} `
                curr=curr.next
            }
            console.log(listItem);
            
        }
    }
    apend(value){
        let newNode= new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            let curr=this.head
            while (curr.next) {
                curr=curr.next

            }
            curr.next=newNode
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return null
        }
        if(index==0){
            this.prepend(value)
        }else{
            let newNode= new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next
            prev.next=newNode
            this.size++
        }
    }
}



let list=new LinkedList()

list.prepend(10)
list.prepend(50)
list.apend(20)
list.insert(30,2)
list.apend(40)
list.print()


console.log("size of the list",list.getSize());