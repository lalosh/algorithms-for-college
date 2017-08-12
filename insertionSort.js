
function inserstionSort(array){

    for(let i = 1; i < array.length; i++){
        
        let j = i;
        let key = array[j];
        
        while(key < array[j-1]){
            array[j] = array[j-1];
            j--;
        }
        
        array[j] = key;
    }

    return array;
}

console.log(inserstionSort([5,4,5,2,1]))