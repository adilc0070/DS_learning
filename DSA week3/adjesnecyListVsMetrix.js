//adjecency list vs metrix

//adjecency list define a graph in which each node is connected to other nodes
//metrix define a graph in which each node is connected to other nodes with weight


// An adjacency matrix is a square matrix used to represent a finite graph.
// The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph.
// In the adjacency matrix, the rows and columns are represented by the graph vertices.
// A value of 1 in the cell matrix[i][j] indicates the presence of an edge between vertices i and j, and a 0 indicates the absence of an edge.

// An adjacency list is another method used to represent a graph.
// It is a collection of unordered lists used to represent a finite graph.
// Each list describes the set of neighbors of a vertex in the graph.
// This is the more space-efficient way to represent a graph when the graph is sparse (i.e., the number of edges is much less than the number of vertices).


class Graph {
    constructor(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let keys = this.AdjList.keys();
        for (let i of keys) {
            let values = this.AdjList.get(i);
            let conc = "";
            for (let j of values) {
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
    }
}

let g = new Graph(5);
let vertices = ['A', 'B', 'C', 'D', 'E'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'C');

g.printGraph();




// Initialize matrix with zeroes
let adjacencyMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// Function to add an edge
function addEdge(adjacencyMatrix, src, dest) {
    adjacencyMatrix[src][dest] = 1;
    adjacencyMatrix[dest][src] = 1;
}

// Add edges
addEdge(adjacencyMatrix, 0, 1);
addEdge(adjacencyMatrix, 0, 2);
addEdge(adjacencyMatrix, 1, 2);

// Print the matrix
console.log(adjacencyMatrix);
