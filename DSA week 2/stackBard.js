class Node {
    constructor(value) {
      this.value=value
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0; // Initialize size to 0
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    getSize() {
      return this.size; // Simply return the size
    }
  
    push(value) {
      if (this.size === 10) {
        throw new Error("Stack overflow"); // Throw error when full
      }
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++; // Increment size directly
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack underflow"); // Throw error when empty
      }
      const poppedValue = this.top.value;
      this.top = this.top.next;
      this.size--; // Decrement size directly
      return poppedValue; // Return the popped value
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("stack is empty");
      } else {
        this._printRecursive(this.top); // Use recursive print
      }
    }
  
    _printRecursive(node) {
      if (node === null) {
        return;
      }
      console.log(node.value);
      this._printRecursive(node.next);
    }
  }
  
  const myStack = new Stack();  // Create a new empty stack
  myStack.push(10);  // Push 10 onto the stack
myStack.push(20);  // Push 20 onto the stack
myStack.print()
