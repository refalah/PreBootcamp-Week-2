function isVowel(letter){
    const newLetter = letter.toLowerCase()
    const vowelList = ["a", "i", "u", "e", "o"]
    let text = ""
    let n = vowelList.indexOf(newLetter)

    for (i = n; i <= n; i++){
            if(vowelList[i] === newLetter){
                text = `${letter} is a vowel`
            } else {
                text = `${letter} is not a vowel`
            }
        }

    return text
    
}

x = isVowel("i")
console.log(x)