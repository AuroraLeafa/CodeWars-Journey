/* 
    Day 28 - Code Wars Challenge
    Link : https://www.codewars.com/kata/576bb71bbbcf0951d5000044/
    CLEAR !!
*/

const countPositivesSumNegatives = input => input && input.length ? [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((acc, curr) => acc + curr, 0)] : [];

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));