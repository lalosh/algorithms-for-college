/*
fibonachi
    1-dynamic
    2-recursive
    3-iterative

*/


//////////////////////////////////////////////////////
////////////////// dynamic fibonachi ////////////////

let fiboData = {

};

function dynamicFibonachi(a) {

    if(a <= 1) 
        if(fiboData[a]) 
            return fiboData[a];
        
        else{
            fiboData[a] = a;  
            return a;
        }

    else 
        if(fiboData[a-1] && fiboData[a-2]) 
            return fiboData[a-1]+fiboData[a-2];
       
        else{
            fiboData[a-1] = dynamicFibonachi(a-1);
            fiboData[a-2] = dynamicFibonachi(a-2);
            return fiboData[a-1] + fiboData[a-2];
        }
}


{
    console.time("dynamicFibonachi");
    
    let result = dynamicFibonachi(45);
    console.log("dynamic fibonachi of 45: ",result);

    console.timeEnd("dynamicFibonachi");
    console.log("dynamicFibonachi finished");
}

////////////////////////////////////////////////
/////////// recursive fibonachi ///////////////

function fibonachi(a){
    if(a == 1 || a == 0) return a;
    else return fibonachi(a-1) + fibonachi(a-2);
}

{
    console.time("fibonachi");
    
    let result = fibonachi(45);
    console.log("recursive fibonachi of 45: ",result);

    console.timeEnd("fibonachi");
    console.log("fibonachi finished");
    
}

/////////////
//dynamic fibonachi is ~~ 450 times faster than recursive fibonachi

///////////////////////////////////////////////////
///////////// iterative fibonachi ////////////////

function iterativeFibonachi(a){
   
    let result = 0;
    let tmp1 = 0;
    let tmp2 = 0;
    let switchFlag = false;

    for(let i = 0; i <= a; i++){
        if(i == 0){ 
            result = 0;
            tmp1 = 0;
        }
        else
                
            if(i == 1){
                result = 1;
                tmp2 = 1;
            }

            else{
                result = (tmp1 + tmp2);
                
                if(!switchFlag) tmp1 = result;
                if(switchFlag) tmp2 = result;
                switchFlag = !switchFlag;

            }

    }

    return result;
}

{
    console.time("iterativeFibonachi");
    
    let result = iterativeFibonachi(45);
    console.log(" iterativeFibonachi of 45: ",result);

    console.timeEnd("iterativeFibonachi");
    console.log("iterativeFibonachi finished");
    
}
