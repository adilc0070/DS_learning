class Graph{
    constructor(){
        this.adgList={}
    }
    addVertex(vertex){
        if(!this.adgList[vertex]){
            this.adgList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adgList[vertex1]){
            this.addVertex(vertex1)
        }
        if(this.adgList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adgList[vertex1].add(vertex2)
        this.adgList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adgList){
            console.log(`${vertex} -> ${[...this.adgList[vertex]]}`);
        }
    }
    hasEdge(vertex1,vertex2){
        if(!this.adgList[vertex1]||this.adgList[vertex2]) return false
        return this.adgList[vertex1].has(vertex2)&&this.adgList[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adgList[vertex1].delete(vertex2)
        this.adgList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adgList[vertex]) return 
        for(let adgVertex of this.adgList[vertex]){
            this.removeEdge(vertex,adgVertex)
        }
        delete this.adgList[vertex]
    }
}
