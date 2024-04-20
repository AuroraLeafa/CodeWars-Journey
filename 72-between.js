/* 
    Day 72 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55ecd718f46fba02e5000029
    CLEAR!!
*/

// function between(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

const between = (a, b) => Array.from({length: (b - a)+1}, (_, idx) => a + idx) 

console.log(between(2, 9));