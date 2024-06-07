/* 
    Kyu 8
    Day 116 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
    CLEAR!!
*/

// function arrayMadness(a, b) {
//   let sumOfA = 0, sumOfB = 0;
//   for (let i = 0; i < a.length; i++) {
//     sumOfA += a[i] ** 2
//   }
//   for (let i = 0; i < b.length; i++) {
//     sumOfB += b[i] ** 3
//   }
//   return sumOfA > sumOfB
// }

const arrayMadness = (a, b) => a.reduce((acc, curr) => acc + (curr**2)) > b.reduce((acc, curr) => acc + (curr**3))

console.log(arrayMadness([1, 2, 3], [2, 2, 3]));
console.log(arrayMadness([5, 3, 2, 4, 1], [15]));
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]));
