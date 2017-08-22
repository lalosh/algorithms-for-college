function getPrefixLength(prefix, position){

    let ANumber = Number(prefix[position]);
    
    if(typeof ANumber === "number" && !isNaN(ANumber))
        return 1;

    else{//is not a number then it's an operand
        
        let m = getPrefixLength(prefix, position+1);        
        let n = getPrefixLength(prefix, position+m);
        
        return (1 + m + n );
    }
}


function prefixToPostfix(prefix){

    if(prefix.length == 1) return prefix;

    let op = prefix[0];

    let length1 = getPrefixLength(prefix, 1);
    let length2 = getPrefixLength(prefix, 1+length1);

    let prefix1 = prefix.substr(1,          length1);
    let prefix2 = prefix.substr(length1+1,  length2);

    let postfix1 = prefixToPostfix(prefix1);
    let postfix2 = prefixToPostfix(prefix2);
    
    let postfix = postfix1.concat(postfix2).concat(op);

    return postfix;
}

console.log(prefixToPostfix("+*325"));