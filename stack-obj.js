
let Stack = {
    _stack: [],
    push: function push(value){
        this._stack.push(value);
    },
    pop: function pop(){
        let h = this._stack.pop();
        return h;
    },
    print: function print(){
        console.log(this._stack);
    },
    size: (function size(){
        return this._stack.length;
    })
};

module.exports = Stack;