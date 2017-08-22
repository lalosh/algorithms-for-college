
function reverseString(s){
    
    if(s.length > 0){

        let firstLetter = s[0];
        let rest = s.slice(1,s.length);

        rest = reverseString(rest);
        return rest.concat(firstLetter);
    }
    else
        return "";
}

console.log(reverseString('abc').length);
console.log(reverseString('abc'));

