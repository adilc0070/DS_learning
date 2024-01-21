class Grap{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.lsit[vertex2]){
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        if(!this.list[vertex1]||!this.list[vertex2]) return false
        return (this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1))
    }
    display(){
        for(let vertex in this.list){
            console.log(vertex,' -> ',[...this.list[vertex]]);
        }
    }
    removeEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.list[vertex]) return
        for(let adjVertex of this.list[vertex]){
            this.removeEdge(vertex, adjVertex)
        }
        delete this.list[vertex]
    }
}