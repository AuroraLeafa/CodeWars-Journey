/* 
    Day 83 - Code Wars Challenge
    Link : https://www.codewars.com/kata/563b74ddd19a3ad462000054
    CLEAR!!
*/

// function stringy(size) {
//   let string = [];
//   for (let i = 0; i < size; i++) {
//     if (i % 2 == 0) {
//       string.push("1");
//     } else {
//       string.push("0");
//     }
//   }
//   return string.join("");
// }

const stringy = size => ''.padStart(size,'10');

console.log(stringy(5));
