/* 
    Kyu 7
    Day 20 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56541980fa08ab47a0000040
    CLEAR!!
*/

// function printerError(s) {
//     const count = s.split("").filter(x => /[n-z]/g.test(x)).length;
//     return `${count}/${s.length}`
// }

// const printerError = s => [s.split("").filter(x => /[n-z]/g.test(x)).length, s.length].join("/")
const printerError = s => [s.match(/[n-z]/g).length, s.length].join("/")

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));