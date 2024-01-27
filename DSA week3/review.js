class Graph{
    constructor(){
        this.adjlist={}
    }
    addVertex(vertex){
        if(!this.adjlist[vertex]){
            this.adjlist[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjlist[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjlist[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjlist[vertex1].add(vertex2)
        this.adjlist[vertex2].add(vertex1)
    }
    print(){
        for(let vertex in this.adjlist){
            console.log(`${vertex} -> ${[...this.adjlist[vertex]]}`);
        }
    }
    hasEdge(vertex1,vertex2){
        if(!this.adjlist[vertex1]||this.adjlist(vertex2)) return false
        return this.adjlist[vertex1].has(vertex2)&&this.adjlist[vertex2].has(vertex1)
    }
    check(vertex1,vertex2){
        if(!this.adjlist[vertex]){
            return false
        }else{
            if(this.hasEdge(vertex1,vertex2)){
                this.hasEdge(vertex2,vertex1)
            }
        }
    }
}

let graph=new Graph()
graph.addEdges('A',"B")
graph.addEdges('B',"C")
graph.addEdges('C',"A")
graph.print()