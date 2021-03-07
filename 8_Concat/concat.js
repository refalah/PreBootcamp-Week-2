function concat(input1, input2){


    let tempArray = []
    let finalArray = []
    let count = 0

    newArray = input1.concat(input2);
    //function filterArray(){
        for (i = 0; i < input1.length; i++){
            for (j = 0; j < input2.length; j++){
                if (input1[i] == input2[j]){
                    tempArray.push(input1[i])
                    count += 1
                } 
            
            }
        }
    //}

    
    
    // for (i = 0; i < newArray.length; i++){
    //     // for (j = 0; j < tempArray.length; j++){
    //     //     if (newArray[i] !== tempArray[1]){
    //     //         finalArray.push(newArray[i])
    //     //     } 
        
    //     // }
    //     // if (newArray[i] !== tempArray[i]){
    //     //     finalArray.push(newArray[i])
    //     // }
    // }


    for (i = 0; i < newArray.length; i++){    
        if (input2[i] !== tempArray[i]){
            tempArray[i++]
            input1.push(input2[i])
        }
    }

    // for (i = 0; i < input2.length; i++){  
    //     for (j = i; j < tempArray.length; j++){  
    //         if (input2[i] !== tempArray[j]){
    //             input1.push(input2[i])
                
    //         }
    //     }
    // }
    console.log(tempArray)
    console.log(newArray)
    input1.pop()
    return input1
    
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 13, 24, 69]
const array2 = [1, 3, 6, 10, 2, 13, 2]

console.log(concat(array1, array2))