/* 
    Kyu 8
    Day 125 - Code Wars Challenge
    Link : https://www.codewars.com/kata/596fba44963025c878000039
    CLEAR!!
*/

// function contamination(text, char) {
//     return text.split("").map(el => el = char).join("")
// }

// const contamination = (text, char) => text.replace(/./g, char);

const contamination = (text, char) => char.repeat(text.length);

console.log(contamination("abc", "z"));
console.log(contamination("abc", "c"));