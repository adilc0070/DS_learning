class Node{
    constructor(value){
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

    apend(value){
        let newNode = new Node(value)
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
        if(index<0 || index>this.size){
            return 
        }
        if(index==0){
            this.prepend(value)
        }else{
            let newNode = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next
            prev.next=newNode
            this.size++
        }
    }
    removeFrom(index){
        if(index<0||index>this.size){
            return null
        }
        let removingNode
        if(index==0){
            removingNode=this.head
            this.head=removingNode.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removingNode=prev.next
            prev.next=removingNode.next
        }
        this.size--
        return removingNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return `removed value: ${value}`
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removingNode=prev.next
                prev.next=removingNode.next
                this.size--
                return `removed value: ${removingNode.value}`
            }
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let cnd=this.head
            let listItems='\n'
            let index=0
            while(cnd){
                listItems += `${cnd.value} ${index} \n`
                cnd=cnd.next
                index++
            }
            console.log("listItems: ",listItems);
        }
    }
}


let list=new LinkedList()
list.prepend(45)
list.prepend(89)
list.prepend(45)


list.apend(20)
list.apend(30)
list.apend(1)

list.insert(56,2)
list.insert(23,1)

// console.log(list.removeFrom(5));
// console.log(list.removeValue());

console.log(list.removeValue(1))
console.log(list.removeValue(89))

list.print()