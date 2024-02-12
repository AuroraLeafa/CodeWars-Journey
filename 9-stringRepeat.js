/* 
    Day 9 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
    CLEAR!!
*/

// const repeatStr = (n, s) => {
//     let newStr = '';
//     for (let i = 0; i < n; i++) {
//         newStr = newStr + s        
//     }
//     return newStr;
// }

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, "Refan "));
