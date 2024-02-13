/* 
    Day 11 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57eae20f5500ad98e50002c5/
    CLEAR !!
*/

// function noSpace(x){
//     return x.replace(/ /g, "")
// }

// const noSpace = x => x.split(" ").join("");

const noSpace = x => x.replaceAll(" ", "");

console.log(noSpace("Nama Saya Refan Reff"));