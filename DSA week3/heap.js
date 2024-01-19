//heap is a tree based dataStructure in which the value at the root node is always greater than or equal to its child nodes
//heap is a complete binary tree
//heap is a complete binary tree with all levels having the same number of nodes
//heap is a complete binary tree with all levels having the same number of nodes except the last level which may have fewer nodes

class Heap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.bubbleUp()
    }
    bubbleUp(){
        let index=this.heap.length-1
        const element=this.heap[index]
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            let parent=this.heap[parentIndex]
            if(element>=parent){
                break
            }
            this.heap[parentIndex]=element
            this.heap[index]=parent
            index=parentIndex
        }
    }
    heapyfyDown(){
        let index=0
        const length=this.heap.length
        const element=this.heap[0]
        while(index<length){
            let leftChildIndex=2*index+1
            let rightChildIndex=2*index+2
            let leftChild,rightChild
            let swap=index
            if(leftChildIndex<length){
                leftChild=this.heap[leftChildIndex]
                if(leftChild>element){
                    swap=leftChildIndex
                
                }
            }
            if(rightChildIndex<length){
                rightChild=this.heap[rightChildIndex]
                if(rightChild>element && rightChild>leftChild){
                    swap=rightChildIndex
                    
                }
            }
            if(swap===index){
                break
            }
            this.heap[index]=this.heap[swap]
            this.heap[swap]=element
            index=swap

        }
    }


}

let heap=new Heap()
heap.insert(10)
heap.insert(40)
heap.insert(15)
heap.insert(-1)
heap.insert(-1)
heap.insert(-1)
heap.insert(20)
heap.insert(30)
console.log(heap.heap)