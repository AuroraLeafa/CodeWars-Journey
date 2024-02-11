/* 
    Day 8 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
    CLEAR!!
*/

// function removeChar(str){
//     return str.substring(1, str.length - 1)
// };

// const removeChar = str => str.substring(1, str.length - 1);

const removeChar = str => str.slice(1, -1);

console.log(removeChar("REFAN"));