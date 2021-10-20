// Code Challenge Find Lucky Numbers 
function uniqueChars(word){
    let filter = new Set([])
    for (let i = 0; i < word; i++){
        filter.add(word[i])
    } if (filter.size === word){ 
        return true 
    } else {
        return false 
    }
} 
uniqueChars(hello)
let runThis = uniqueChars()
console.log(runThis)