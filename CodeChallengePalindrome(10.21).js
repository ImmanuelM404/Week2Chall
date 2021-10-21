/// Challenge 10/21 Palindrome 
function isPalindrom(word){
    for(let i = 0; i <word.length; i++){
        if (word[i] === word[word.length-i-1]){
            return true;
        } else {
            return false 
        }

    }
}
 //let checkPal = isPalindrom('almostomla')
//let checkPal = isPalindrom('hello')
let checkPal = isPalindrom('red')
console.log(checkPal)