class Hash{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let asci=0
        for(let i=0;i<key.length;i++){
            asci+=key.charCodeAt(i)
        }
        return asci%this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i= 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}


class seprateChaing{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let asci=0
        for(let i=0; i<key.length;i++){
            asci+=key.charCodeAt(i)
        }
        return asci%this.size
    }
    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.slpice(sameKey.indexOf(sameKey),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
let hash=new Hash(12), col=new seprateChaing(5)
hash.set("name","adil")
col.set("name","adil")
col.set("age",10)
hash.set("age",10)
col.set("ega","10")
// hash.set("ega","10")

hash.display()
col.display()