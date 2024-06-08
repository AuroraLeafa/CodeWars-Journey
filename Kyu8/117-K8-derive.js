/* 
    Kyu 8
    Day 117 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5963c18ecb97be020b0000a2
    CLEAR!!
*/

const derive = (coefficient,exponent) => `${coefficient * exponent}x^${exponent - 1}`

console.log(derive(5,8));
console.log(derive(5,9));
