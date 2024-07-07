/* 
    Kyu 7
    Day 40 - Code Wars Challenge
    Link : https://www.codewars.com/kata/583f158ea20cfcbeb400000a
    CLEAR!!
*/

// function arithmetic(a, b, operator) {
//   if (operator === "add") return a + b;
//   if (operator === "subtract") return a - b;
//   if (operator === "multiply") return a * b;
//   if (operator === "divide") return a / b;
// }

const arithmetic = (a,b,operator) => ({
    "add" : a + b,
    "subtract" : a - b,
    "multiply" : a * b,
    "divide" : a / b,
})[operator]

console.log(arithmetic(5, 4, "add"));
console.log(arithmetic(5, 4, "subtract"));
console.log(arithmetic(5, 4, "multiply"));
console.log(arithmetic(5, 4, "divide"));
