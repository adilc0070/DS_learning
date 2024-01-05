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
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        if(this.isEmpty()){
            this.head=new Node(value)
        }else{
            let newNode = new Node(value)
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

    deleteAt(index){
        if(index<0 ||index>this.size){
            return
        }
        let removingNode
        if(index===0){
            removingNode=this.head
            this.head=this.head.next
            this.size--
            return `value deleted: ${removingNode.value}`
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removingNode=prev.next
            prev.next=removingNode.next
            this.size--
            return `value deleted: ${removingNode.value}`
        }
    }

    deleteValue(value){
        if(this.isEmpty()){
            return
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return `value deleted: ${value}`
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removingNode=prev.next
                prev.next=removingNode.next
                this.size--
                return `value deleted: ${removingNode.value}`
            }
        }
    }
    insert(value,index){
        if(index<0 ||index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            let newNode = new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            newNode.next=prev.next
            prev.next=newNode
        }
        this.size++
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0, curr=this.head
        while(curr){
            if(curr.value ===value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    }


}


let list = new LinkedList()
// values add to the list
list.prepend(10)
list.prepend(20)
list.apend(30)

list.prepend(40)

list.insert(50,3)
console.log(list.deleteValue(10))
console.log(list.deleteAt(2))
console.log(list.search(10))
list.print()
console.log(list.getSize());