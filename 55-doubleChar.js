/* 
    Day 55 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56b1f01c247c01db92000076/
    CLEAR !!
*/


// function doubleChar(str) {
//   let char = '';
//   for (const element of str) {
//     char += element + element    
//   }
//   return char
// }

const doubleChar = str => str.split("").map((c) => c + c).join("")

console.log(doubleChar("abcd"));
console.log(doubleChar("Adidas"));