class Node{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}
class Trie{
    constructor (){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return node.isEnd
    }
    prefix(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return []
            node=node.children[char]
        }
        let items=[]
        this.dfs(node,word,items)
        return items
    }
    dfs(node,curr,arr){
        if(node.isEnd){
            arr.push(curr)
        }
        for(let char in node.children){
            this.dfs(node.children[char],curr+char,arr)
        }
    }
}


let trie=new Trie()
trie.insert("Ad")
trie.insert("Adil")
trie.insert("Adilc")
trie.insert("adilc")
trie.insert("irfan")
trie.insert("irfana")


console.log();