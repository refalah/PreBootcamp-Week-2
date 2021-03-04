let x = ''
for (let i = 0; i < 5; i++){
    for (j = 0; j <= i; j++){
        x += '*'
    }
    x += '\n'
}

////Versi 2//////

// for (let i = 0; i < 5; i++){
//     for (j = i; j < 5; j++){
//         x += '*'
//     }
//     x += '\n'
// }

// for (let i = 10; i > 0; i--){
//     for (j = 0; j < i; j++){
//         x += '*'
//     }
//     x += '\n'
// }




console.log(x)