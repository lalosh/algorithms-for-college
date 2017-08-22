let Stack = require('./stackClass.js');

function hanoi(a,b,c,n){
    if(n == 1){
        c.push(a.pop());
    }
    else{
        // b.push(a.pop());               
        hanoi(a,c,b,n-1);
        c.push(a.pop());        
        hanoi(b,a,c,n-1);
    }
}

let a = new Stack();
let b = new Stack();
let c = new Stack();


a.push(4);
a.push(3);
a.push(2);
a.push(1);


hanoi(a,b,c,4);

a.print();
b.print();
c.print();