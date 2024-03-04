/* 
    Day 29 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57eae65a4321032ce000002d/
    CLEAR !!
*/

// function fakeBin(x) {
//   let arr = "";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] < 5) {
//       arr += '0';
//     } else {
//       arr += '1';
//     }
//   }
//   return arr;
// }

// function fakeBin(x) {
//   let result = "";
//   for (let i = 0; i < x.length; i++) {
//     result += x[i] < 5 ? "0" : "1";
//   }
//   return result;
// }

const fakeBin = x => x.split('').map(num => num < 5 ? '0' : '1').join('')

console.log(fakeBin("45385593107843568"));
