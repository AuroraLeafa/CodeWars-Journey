/* 
    Day 73 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57a083a57cb1f31db7000028
    CLEAR!!
*/

// function powersOfTwo(n) {
//   const arr = [];
//   for (let i = 0; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   return arr;
// }

const powersOfTwo = n => Array.from({length: n+1}, (_, idx) => 2 ** idx)

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
