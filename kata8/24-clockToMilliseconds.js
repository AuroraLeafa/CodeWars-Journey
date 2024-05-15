/* 
    Day 24 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/
    CLEAR !!
*/

// function past(h, m, s){
//     const rules = {
//         h : 60 * 60 * 1000,
//         m : 60 * 1000,
//         s : 1000
//     }
//     return (h * rules.h) + (m * rules.m) + (s * rules.s)
//   }

const past = (h, m, s) => ((h * 3600) + (m * 60) + s) * 1000

console.log(past(0,1,1));
