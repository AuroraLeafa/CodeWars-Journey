/* 
    Kyu 7
    Day 19 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56269eb78ad2e4ced1000013
    CLEAR!!
*/

// function findNextSquare(sq) {
//   return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1;
// }

const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq)+1) ** 2

console.log(findNextSquare(121));
console.log(findNextSquare(319225));
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));
