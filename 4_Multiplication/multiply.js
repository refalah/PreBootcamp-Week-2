
function looper(num){

    let text = ""
    let i;
    let j;
    let result
    
    if (num >= 1 && num <= 9){
        for(i = num; i <= num; i++){
            for(j=1; j <= 10; j++){
                result = i * j
                text += i + " * " + j + " = " + result + "\n"
               
            }
        }
        console.log(text)
    } else {
        console.log("No more than 9, no less than 1")
    }
    
}

looper(9)