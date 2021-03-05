function removeOne(input1, input2){

    const tempArray = []

    
    for (i = 0; i <= input1.length; i++){
        if(input1[i] !== input2){
            tempArray.push(input1[i]);
        } 

        
    }

    tempArray.pop()

    console.log(tempArray)
    
}

const array1 = ["a", "b", "c", "d", "e"]

removeOne(array1, "b")