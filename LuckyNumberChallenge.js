// Find Lucky Numbers

function luckyNumbers(num1){
    numPossible = [1,2,3,4,5,6,7,8,9,10]
    num = []
    for (let i = 0; i < num1; i++){
    let x = Math.floor(Math.random() * numPossible.length);
    num.push(numPossible[x])
    numPossible.splice(x,1)
} return num 

} let myLuckyNumber = luckyNumbers(5)
console.log(myLuckyNumber)

 //var arr = [];
 //while(arr.length < 8){
    //var r = Math.floor(Math.random() * 100) + 1;
    //if(arr.indexOf(r) === -1) arr.push(r);