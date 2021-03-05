function fibonacci(num) {
    let arrayFirst = [0, 1];

    for (i = 2; i <= num; i++){
        x = arrayFirst[i - 1]
        y = arrayFirst[i - 2]
        arrayFirst.push(x + y)
    }

    return arrayFirst
}

x = fibonacci(10)
console.log(x)