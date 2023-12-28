class Node{
    constructor(value){
        this.value=value
        this.next= null
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
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
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=newNode
        }
        this.size++
    }

    insert(value,index){
        if(index<0 ||index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            let newNode=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next
            prev.next=newNode
            this.size++
        }

    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let cnd=this.head
            let listItems=''
            while(cnd){
                listItems += `${cnd.value} `
                cnd=cnd.next
            }
            console.log("listItems: ",listItems);
        }
    }
}


let list=new LinkedList()
console.log("is Empty",list.isEmpty())
console.log("size of the list",list.getSize());
list.print()

list.insert(45,0)
list.print()

list.insert(89,0)
list.print()

list.insert(23,1)
list.print()

list.insert(56,2)
list.print()
console.log("size of the list",list.getSize());