/* 
    Kyu 8
    Day 123 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
    CLEAR!!
*/

// function sumOfDifferences(arr) {
//   let sorted = arr.sort((a, b) => b - a);
//   let res = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     res += sorted[i] - sorted[i + 1];
//   }
//   return res;
// }

// const sumOfDifferences = (arr) => arr.sort((a, b) => b - a).slice(1).reduce((curr, acc, idx) => curr + (arr[idx] - acc), 0);

const sumOfDifferences = arr => Math.max(...arr) - Math.min(...arr)

console.log(sumOfDifferences([1, 2, 10]));
