class Node{
    constructor(){
        this.child={}
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
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return node.isEnd
    }
    prefix(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return []
            }
            node=node.child[char]
        }
        
        let items=[]
        this.dfs(node,word,items)
        return items
    }
    dfs(node,curr,arr){
        if(node.isEnd){
            arr.push(curr)
        }
        for(let char in node.child){
            this.dfs(node.child[char],curr+char,arr)
        }
    }
}

let trie=new Trie()
trie.insert("adil")
trie.insert("adish")
trie.insert("ad")
trie.insert("adilChalil")
trie.insert("adiL")
trie.insert("adiL-c")
trie.insert("nishad")

console.log(trie);