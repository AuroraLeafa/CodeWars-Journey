/* 
    Kyu 7
    Day 5 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5467e4d82edf8bbf40000155
    CLEAR!!
*/

// function descendingOrder(n) {
//   return +String(n).split("").sort((a,b) => b-a).join("")
// }

const descendingOrder = n => +String(n).split("").sort().reverse().join("")

console.log(descendingOrder(1893423345));
