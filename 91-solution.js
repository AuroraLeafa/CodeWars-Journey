/* 
    Day 91 - Code Wars Challenge
    Link : https://www.codewars.com/kata/50654ddff44f800200000007
    CLEAR!!
*/


// function solution(a, b) {
//   if (a.length > b.length) {
//     return [b, a, b].join("");
//   } else {
//     return [a, b, a].join("");
//   }
// }

const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a

console.log(solution("44", "555"));
console.log(solution("5", "33"));
console.log(solution("Test", "ing"));
