function pascal(num){
    let triArray = [] //triangle container

    if (num === 0) {
        return triArray //no rows
    }

    triArray.push([1]) //1 at start & looks like = [1]

    for (i = 1; i < num; i++){ //starts at 1, cause we have 1 pushed at [0]
        let prevRow = triArray[i - 1];//number of element(s) between the 1s
        let newRow = [];

        newRow.push(1) //1 at the start...looks like:

        //[1] first push
        //[1,..] newRow push

        for (j = 1; j < prevRow.length; j++){
            newRow.push(prevRow[j - 1] + prevRow[j]); //the sum of two elements one row above
        }

        newRow.push(1);//the 1 at the end
        triArray.push(newRow);//push to triangle container
    }

    return triArray;


}

x = pascal(6)
console.log(x)