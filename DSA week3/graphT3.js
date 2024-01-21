class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
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
        for(let adjecentVertex in this.adjecencyList){
            console.log(`${adjecentVertex} -> ${[...this.adjecencyList[adjecentVertex]]}`);
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
        console.log(vertex);
        if(!this.adjecencyList[vertex]){
            return 
        }
        for(let ver of this.adjecencyList[vertex]){
            this.removeEdge(vertex,ver)
        }
        delete this.adjecencyList[vertex]
    }
    // DFS recursive function
    dfsRecursive(startVertex, visited = {}) {
        if (!this.adjecencyList[startVertex]) {
            return;
        }

        visited[startVertex] = true;
        console.log(startVertex);

        for (let neighbor of this.adjecencyList[startVertex]) {
            if (!visited[neighbor]) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }

    // DFS method
    dfs(startVertex) {
        const visited = {};
        this.dfsRecursive(startVertex, visited);
    }

    // BFS method
    bfs(startVertex) {
        const queue = [];
        const visited = {};
        
        if (!this.adjecencyList[startVertex]) {
            return;
        }

        queue.push(startVertex);
        visited[startVertex] = true;

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (let neighbor of this.adjecencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

let graph=new Graph()

graph.addEdges('A','B')
graph.addEdges('A','C')
graph.addEdges('C','B')
graph.addEdges('A','D')
// graph.removeVertex('A')
graph.display()

console.log('DFS:');
graph.dfs('A');

console.log('\nBFS:');
graph.bfs('A');