class Heap{
    constructor(){
        this.heap=[]
    }
    getParantIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }

    swap(i,j){
        let temp=this.heap[i]
        this.heap[i]=this.heap[j]
        this.heap[j]=temp
    }
    heapfyUp(index){
        while(index>0 && this.heap[index]<this.heap[this.getParantIndex(index)]){
            this.swap(index,this.getParantIndex(index))
            index=this.getParantIndex(index)
        }
    }
    heapfyDown(index){
        let leftChildIndex=this.getLeftChildIndex(index)
        let rightChildIndex=this.getRightChildIndex(index)
        let smallest=index

        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[smallest]){
            smallest=leftChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[smallest]){
            smallest=rightChildIndex
        }
        if(smallest!=index){
            this.swap(index,smallest)
            this.heapfyDown(smallest)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapfyUp(this.heap.length-1)
    }
    extractMin(){
        if(this.heap.length===0){
            return null
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapfyDown(0)
        return min
    }
    print(){
        console.log(this.heap); 
    }
}


let minHeap=new Heap()
minHeap.insert(19)
minHeap.insert(1)
minHeap.insert(20)
minHeap.insert(1)
minHeap.insert(9)
minHeap.insert(-9)
minHeap.print()
minHeap.extractMin()
minHeap.extractMin()
minHeap.extractMin()
console.log(minHeap);