/* 
    Day 14 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57356c55867b9b7a60000bd7/
    CLEAR !!
*/

// function basicOp(operation, value1, value2){
//   switch (operation) {
//     case "+":
//       return  value1 + value2
//     case "-":
//       return  value1 - value2
//     case "/":
//       return value1 / value2
//     case "*":
//       return value1 * value2
//     default:
//       return 0;
//   }
// }

const basicOp = (operation, value1, value2) => {
  operationRule = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };
  return operationRule[operation](value1, value2);
  }

console.log(basicOp('+', 20, 5));