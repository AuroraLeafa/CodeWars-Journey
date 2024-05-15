/* 
    Day 89 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5547929140907378f9000039
    CLEAR!!
*/

// function shortcut(string) {
//   let res = "";
//   for (const element of string) {
//     if (!"aiueo".includes(element)) {
//       res += element;
//     }
//   }
//   return res;
// }

const shortcut = string => string.replace(/[aiueo]/g, "");

console.log(shortcut("Helloooeeeoeoeoe"));
