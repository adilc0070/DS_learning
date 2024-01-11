class Hash{
    constructor(size){
        this.items=new Array(size)
        this.size=size
    }
    hash(key){
        let asci=0
        for(let i=0;i<key.length;i++){
            asci+=key.charCodeAt(i)
        }
        return asci % this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.items[index]=value
    }
    get(key){
        let index=this.hash(key)
        console.log(this.items[index]);
        return this.items[index]

    }
    remove(key){
        let index=this.hash(key)
        this.items[index]=undefined
    }
    display(){
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]){
                console.log(i,this.items[i]);
            }
        }
    }
}


let hash=new Hash(100)
hash.set("one","2")
hash.set('three',"4")
hash.set('five','6')
hash.set('seven',9)
hash.display()
console.log(hash);
