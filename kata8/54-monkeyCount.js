/* 
    Day 54 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
    CLEAR !!
*/

// function monkeyCount(n) {
//   let count = [];
//   for (let i = 1; i <= n; i++) {
//     count.push(i)
//   }
//   return count
// }

const monkeyCount = n => Array.from({ length: n }, (v, i) => i + 1);

console.log(monkeyCount(5));