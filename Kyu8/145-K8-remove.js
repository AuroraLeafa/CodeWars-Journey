/* 
    Kyu 8
    Day 145 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57faf12b21c84b5ba30001b0
    CLEAR!!!
*/

// function remove(string) {
//   return string.split("!").join("") + "!";
// }

const remove = string => string.replace(/!+/g, "")+"!"

console.log(remove("asdasdsad!!!!")); // "asdasdsad!"
console.log(remove("!!!asdasdsad!!!!")); // "asdasdsad!"
