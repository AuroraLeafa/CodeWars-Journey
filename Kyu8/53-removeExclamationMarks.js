/* 
    Day 53 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57a0885cbb9944e24c00008e/
    CLEAR !!
*/

// function removeExclamationMarks(s) {
//   return s.split("!").join("")
// }

const removeExclamationMarks = s => s.replaceAll("!", '')

console.log(removeExclamationMarks("TODAY IS MY BIRTHDAY !!!!!!!!!!!"));
