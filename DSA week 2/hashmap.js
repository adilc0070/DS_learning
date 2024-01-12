class Hash{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let inde=0
        for(let i=0;i<key.length;i++){
            inde+=key.charCodeAt(i)
        }
        return inde % this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index= this.hash(key)
        console.log(this.table[index]); 
        return this.table[index]
    }
    remove(key){
        let index= this.hash(key)
        this.table[index]=undefined

    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}


let hash=new Hash(5)
hash.set('name','adil')
hash.set('age',20)
hash.set('place','ads')
hash.set('lass','78')
hash.set('ssal','78')
hash.display()
console.log(hash);
console.log(Math.floor(Math.random()*815));