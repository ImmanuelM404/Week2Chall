// Code Challenge 10/22 Cody 'Pig Latin'

// function PigLatin(phrase){
//     if (phrase[0] !== phrase.startsWith('a', 'e', 'i', 'o', 'u'))
//     return true
// } 
// console.log(PigLatin("Hello world"))


let pigLatin = sentence => {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let words = sentence.split(' ')

    let mapped = words.map(word => {
        if (vowelsArr.indexOf(word[0]) !== -1){
            return word + 'yay'
        } else {
            return word.slice(1, word.length) + word.slice(0,1) + 'ay'
        }
    })
    return mapped.join(" ")
}

console.log(pigLatin('porcupines are cute'))