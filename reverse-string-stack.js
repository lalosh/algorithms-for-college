'use strict';

let stackObj = require('./stack-obj.js');

//OLOO desing pattern
let stack = Object.create(stackObj);

function reverse(str){

    while(str.length > 0){

        stack.push(str[0]);
        str = str.slice(1, str.length)
    }

    let newstring = "";

    while(stack.size() > 0){
        newstring = newstring.concat(stack.pop());
    }

    return newstring;
}

console.log(reverse('hello'));