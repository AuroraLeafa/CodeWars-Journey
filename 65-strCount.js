/* 
    Day 65 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5865918c6b569962950002a1
    CLEAR !!
*/

// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count += 1;
//     }
//   }
//   return count;
// }

const strCount = (str, letter) => str.split(letter).length-1

console.log(strCount("Hello", "l"));
console.log(strCount("TELL ME WHY, AINT NOTHING BUT A HEARTACHE, AINT NOTHING BUT A MISTAKE", "A"));
