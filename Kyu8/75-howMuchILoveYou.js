/* 
    Day 75 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
    CLEAR!!
*/

function howMuchILoveYou(n) {
    const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return phrases[(n - 1) % phrases.length] 
}

console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(4));
console.log(howMuchILoveYou(8));
console.log(howMuchILoveYou(9));