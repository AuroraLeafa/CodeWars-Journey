/* 
    Day 79 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57202aefe8d6c514300001fd
    CLEAR!!
*/

// function saleHotdogs(n) {
//   return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
// }

const saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);


console.log(saleHotdogs(5));
console.log(saleHotdogs(8));
console.log(saleHotdogs(15));