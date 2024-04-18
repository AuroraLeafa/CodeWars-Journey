/* 
    Day 70 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55edaba99da3a9c84000003b/
    CLEAR!!
*/

// function divisibleBy(numbers, divisor) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % divisor === 0) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }

const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0)

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
