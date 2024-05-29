/* 
    Kyu 7
    Day 8 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
    CLEAR!!
*/

// function accum(s) {
// 	let res = [];
//     for (let i = 0; i < s.length; i++) {
//         let repeat = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
//         res.push(repeat)
//     }
// return res.join("-");
// }

const accum = s => s.split("").map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join("-")

console.log(accum("abcde"));