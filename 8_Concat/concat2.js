function concat(input1, input2){


    let tempArray = []
    let finalArray = []
    let ex = []
    let count = ""

    // for (i = 0; i < input1.length; i++){
    //     ex.push(input1[i])
    // }
    
    tempArray = input1.concat(input2)

    // for (num = 0; num < tempArray.length; num++){
    //     for(i = num; i <= num; i++){
    //         for(j = num; j <= num; j++){
    //             if (tempArray[num] == tempArray[num])
    //                 finalArray.push(tempArray[num])
    //         }
    //     }
    // }

    

    // for(i = 0; i <= tempArray.length; i++){
    //     for(j = 0; j <= tempArray.length; j++){
    //         if (tempArray[i] == tempArray[j])
    //             finalArray.push(tempArray[i])
    //     }
    // }

    let pointer1 = 0



    for(pointer2 = 1; pointer2 < tempArray.length; pointer2++){
       
            if (tempArray[pointer1] !== tempArray[pointer2++]){
                pointer1++
                tempArray[pointer1] = tempArray[pointer2]
                //finalArray.push(tempArray[pointer1])
            }
                
        
    }

    // for (i = 0; i < tempArray.length; i++){
        
    //     // if (tempArray[i] == input1[i]){
    //     //     finalArray.push(tempArray[i])
    //     //     count++
    //     // }
    //     console.log(tempArray[i])
    // }


    // x = finalArray.length - 1
    // y = finalArray.length - x


    // console.log(tempArray)
    
    return tempArray
    
}

const array1 = [1, 3, 4, 1, 5, 6]
const array2 = [7, 2, 4, 1, 5]

console.log(concat(array1, array2))