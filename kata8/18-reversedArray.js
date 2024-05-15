/* 
    Day 18 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5583090cbe83f4fd8c000051/
    CLEAR !!
*/

// function digitize(n) {
//     return String(n).split("").reverse().map(Number)
//   }

const digitize = n => Array.from(String(n), Number).reverse()

console.log(digitize(123456));