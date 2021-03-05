
function range(start, finish){

    let tempArray = []

    function isPrime(finish) {


        if (finish < 2) {
            return false;
        }
    
        for (i = 2; i < finish; i++) {
            if (finish % i === 0) {
                return false;
            }
        }
    
        return true;
    
    }

    
    for (let i = start; i < finish; i++){
        
        if (isPrime(i)){
            tempArray.push(i)
        }
        
    }

    console.log(tempArray)
}

range(20, 50)
