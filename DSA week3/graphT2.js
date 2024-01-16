class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(`${vertex} -> ${[...this.adjecencyList[vertex]]}`);
        }
    }
    hasEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]||!this.adjecencyList[vertex2]) return false
        return (this.adjecencyList[vertex1].has(vertex2)&&this.adjecencyList[vertex2].has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(this.adjecencyList[vertex]){
            return 
        }
        for(let adjVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjecencyList[vertex]
    }
}

// let grap=new Graph()
// grap.addEdge("A","B")
// grap.addEdge("B","C")
// grap.addEdge("C","D")
// grap.addEdge("A","C")
// grap.addEdge("B","D")


// grap.display()

// grap.hasEdge("a","D")
// // grap.display()


console.log(typeof null);