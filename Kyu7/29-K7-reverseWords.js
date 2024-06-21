/* 
    Kyu 7
    Day 29 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
    CLEAR!!
*/

function reverseWords(str) {
    let newStr = str.split(" ")
    let res = []
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].split('').reverse().join('')
    }
    return newStr.join(" ")
}

// const reverseWords = (str) =>
//   str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");

console.log(reverseWords("double  spaced  words"));
