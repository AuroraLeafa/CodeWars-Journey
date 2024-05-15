/* 
    Day 40 - Code Wars Challenge
    Link : https://www.codewars.com/kata/51c8991dee245d7ddf00000e/
    CLEAR !!
*/

// function reverseWords(str){
//     let words = str.split(' ')
//     let reverseWords = []
//     for (let i = words.length - 1; i >= 0; i--) {
//         reverseWords.push(words[i])
//     }
//     return reverseWords.join(' ');
//   }

const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords("UNO REVERSE"));
