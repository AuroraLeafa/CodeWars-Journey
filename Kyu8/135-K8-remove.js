/* 
    Kyu 8
    Day 135 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57faece99610ced690000165
    CLEAR!!
*/

// function remove(string) {
//     while (string.endsWith("!")) {
//         string = string.slice(0, -1)
//     }
//     return string;
// }

const remove = string => string.replace(/!+$/, "")

console.log(remove("asdasdsad!!!!"));
console.log(remove("asda!!AAAA!!!!"));
