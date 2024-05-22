/* 
    Day 76 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
    CLEAR!!
*/

// function findDifference(a, b) {
//   let sumA = 1, sumB = 1;
//   for (let i = 0; i < a.length; i++) {
//     sumA *= a[i];
//   }
//   for (let i = 0; i < b.length; i++) {
//     sumB *= b[i];
//   }
//   return Math.abs(sumA - sumB);
// }

const findDifference = (a, b) => Math.abs((a.reduce((acc, curr) => acc * curr, 1) - (b.reduce((acc, curr) => acc * curr, 1))))

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
