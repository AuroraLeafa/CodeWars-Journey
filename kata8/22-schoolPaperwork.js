/* 
    Day 22 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
    CLEAR !!
*/

// function paperwork(n, m) {
//   if(n > 0 && m > 0) return n * m
//   return 0;
// }

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }

const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0

console.log(paperwork(2,5));
console.log(paperwork(-1,5));