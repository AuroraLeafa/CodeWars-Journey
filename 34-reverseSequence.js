/* 
    Day 34 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5a00e05cc374cb34d100000d/
    CLEAR !!
*/

// const reverseSeq = (n) => {
//   let arr = [];
//   for (let i = n; i >= 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// };

const reverseSeq = n => Array.from({length: n}, (_, index) => n - index)

console.log(reverseSeq(6));
