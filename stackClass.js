class Stack {
    constructor() {
        this._stack = [];
    }
    push(value) {
        this._stack.push(value);
    }
    pop() {
        let h = this._stack.pop();
        return h;
    }
    print() {
        console.log(this._stack);
    }
    size() {
        return this._stack.length;
    }
    top(){
        return this._stack[this._stack.length];
    }
    isEmpty(){
        return this._stack.length == 0;
    }
}

module.exports = Stack;
// // let stack1 = new Stack();
// let stack2 = new Stack();

// let stack1 = new Stack();

// stack1.push(4);
// stack1.push(5);

// stack1.print();

// stack2.push(55);
// stack2.print();