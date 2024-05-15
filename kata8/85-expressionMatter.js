/* 
    Day 85 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
    CLEAR!!
*/

// function expressionMatter(a, b, c) {
//   const expressions = [
//     a + b + c,
//     a * b * c,
//     a * b + c,
//     a + b * c,
//     (a + b) * c,
//     a * (b + c),
//   ];
//   return Math.max(...expressions);
// }

const expressionMatter = (a, b, c) =>
  Math.max(
    a + b + c,
    a * b * c,
    a * b + c,
    a + b * c,
    (a + b) * c,
    a * (b + c),
  );

console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(2, 2, 2));
console.log(expressionMatter(3, 3, 3));
