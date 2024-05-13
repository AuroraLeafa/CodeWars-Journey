/* 
    Day 93 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57fae964d80daa229d000126
    CLEAR!!
*/

// function remove(string) {
//   return string.replace(/!$/, "");
// }

const remove = string => string.endsWith("!") ? string.slice(0, -1) : string

console.log(remove("Test!a!!!a!"));
console.log(remove("Te!a!!!a!st"));
console.log(remove("!a!!!a!Test"));
