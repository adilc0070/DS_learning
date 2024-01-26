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
    heapfieUp(index){
        while(index>0&& this.heap[index]>this.heap[this.getParantIndex(index)]){
            this.swap(index,this.getParantIndex(index))
            index=this.getParantIndex(index)
        }
    }
    heapfieDown(index){
        let leftChildIndex=this.getLeftChildIndex(index)
        let rightChildIndex=this.getRightChildIndex(index)
        let largest=index

        if(leftChildIndex<this.heap.length &&this.heap[leftChildIndex]>this.heap[largest]){
            largest=leftChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]>this.heap[largest]){
            largest=rightChildIndex
        }

        if(largest!=index){
            this.swap(index,largest)
            this.heapfieDown(largest)
        }
    }
    insert(value){
        this.heap.push(value) 
        this.heapfieUp(this.heap.length-1) 
    }
    extractMax(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapfieDown(0)
        return max
    }
    print(){console.log(this.heap);}
    
}



let maxHeap=new Heap()
maxHeap.insert(1)
maxHeap.insert(3)
maxHeap.insert(7)
maxHeap.insert(15)
maxHeap.insert(2)
maxHeap.insert(60)
maxHeap.insert(120)
maxHeap.print()

console.log(maxHeap.getParantIndex(3));