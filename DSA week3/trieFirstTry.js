class Node{
    constructor() {
        this.child={}
        this.end=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(value){
        let node=this.root
        for(let char of value){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.end=true
    }
    search(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.child[char]) {
                return [];
            }
            node = node.child[char];
        }

        const words = [];
        this.dfs(node, prefix, words);
        return words;
    }

    dfs(node, currentWord, words) {
        if (node.end) {
            words.push(currentWord);
        }

        for (const char in node.child) {
            this.dfs(node.child[char], currentWord + char, words);
        }
    }
    // printAllWords() {
    //     const words = [];
    //     this._dfs(this.root, '', words);
    //     console.log(words);
    // }

    // _dfs(node, currentWord, words) {
    //     if (node.end) {
    //         words.push(currentWord);
    //     }

    //     for (const char in node.child) {
    //         this._dfs(node.child[char], currentWord + char, words);
    //     }
    // }
}


let trie=new Trie()
trie.insert("javaScript")
trie.insert("adil")
trie.insert("adish")
trie.insert("das")
trie.insert("java")
console.log(trie.search('a'))
// trie.printAllWords()