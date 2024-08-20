/* 
    Kyu 7
    Day 50 - Code Wars Challenge
    Link : https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
    CLEAR!!
*/

function reverseLetter(str) {
  return str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("");
}

console.log(reverseLetter("hello"));
console.log(reverseLetter("edabit"));
console.log(reverseLetter("Testing"));
console.log(reverseLetter("Test123ing"));
