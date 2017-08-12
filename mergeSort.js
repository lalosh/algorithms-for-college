///////////merge sort algorithm /////////////////

function mergeSort(array){
    
    if(array.length == 0 ) return [];
    
    if(array.length == 1 ) return array;

    if(array.length > 1){

        let divided = divide(array);

        return merge(
                    mergeSort( divided.firstHalf  ) ,
                    mergeSort( divided.secondHalf )
                );
    }

///////// inner helper functions//////////////

function divide(array){

    let firstHalf = [];
    let secondHalf = [];

    if(array.length == 0 ) {
        firstHalf = []; 
        secondHalf = [];
    }

    if(array.length == 1) {
        firstHalf = [array[0]];
         secondHalf = [];
    }

    
    for(let i = 0; i < array.length; i++)
        if(i < array.length/2) 
            firstHalf.push(array[i]);
        else 
            secondHalf.push(array[i]);

        
    return {
        firstHalf : firstHalf,
        secondHalf : secondHalf
    }
}

function merge(array1, array2){

    if(array1.length == 0) return array2;
    if(array2.length == 0) return array1;
    
    let res = [];
    let j = 0;
    let i = 0;

   while(i < array1.length && j < array2.length){


        if(array1[i] < array2[j]){
            res.push(array1[i]);
            i++;
        }
        else{
            res.push(array2[j]);
            j++;
        }
    
    }

    while(j < array2.length){
        res.push(array2[j]);
        j++; 
    }
    
    while(i < array1.length){
        res.push(array1[i]);
        i++;
    }

    return res;
}

}

console.log(mergeSort([1,0,7,3,2,89,-4,-5,21,0,99,43]));
