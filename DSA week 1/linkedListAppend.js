class Node{
    constructor (value){
        this.value=value
        this.next= null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.size++
    }
    append(value){
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

    print(){
        if(this.isEmpty()){
            console.log("list is empty");
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
console.log("starting list",list.isEmpty());
console.log("list size",list.getSize());

list.prepend(10)
list.prepend(20)
list.append(30)
list.prepend(40)
list.append(60)
list.append(70)
list.prepend(50)

list.print()