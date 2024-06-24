/* 
    Kyu 7
    Day 31 - Code Wars Challenge
    Link : https://www.codewars.com/kata/555eded1ad94b00403000071
    CLEAR!!
*/

// function SeriesSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += 1 / (1 + 3 * i);
//   }
//   return sum.toFixed(2);
// }

const SeriesSum = n => Array.from({length : n}, (_, i) => 1 / ( 1 + 3 * i)).reduce((curr, acc) => curr + acc, 0).toFixed(2)

console.log(SeriesSum(4));
console.log(SeriesSum(0));
