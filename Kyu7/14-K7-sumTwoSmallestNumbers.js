/* 
    Kyu 7
    Day 14 - Code Wars Challenge
    Link : https://www.codewars.com/kata/558fc85d8fd1938afb000014
    CLEAR!!
*/

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNumbers([5, 4, 3, 2, 1]));
