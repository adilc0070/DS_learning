let primes=[]
function checkPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    if(num==1 || num==0){
        return false
    }
    return true
}



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
        let newNode = new Node(value)
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
console.log("starting list",list.isEmpty());
console.log("list size",list.getSize());

for(i=0;i<60;i++){
    if(checkPrime(i)){
        list.prepend(i)
    }
}
list.print()