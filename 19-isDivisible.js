/* 
    Day 19 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5545f109004975ea66000086
    CLEAR !!
*/

// function isDivisible(n, x, y) {
//   if(n % x === 0 && n % y === 0){
//     return true
//   } 
//   return false
// }

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

console.log(isDivisible(20, 4, 5));