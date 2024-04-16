/* 
    Day 68 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56efc695740d30f963000557/
    CLEAR!!
*/

// String.prototype.toAlternatingCase = function () {
//   let char = "";
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === this[i].toUpperCase()) {
//       char += this[i].toLowerCase();
//     } else {
//       char += this[i].toUpperCase();
//     }
//   }
//   return char;
// };

String.prototype.toAlternatingCase = function () {
    return this.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
};

console.log("Testing OUT".toAlternatingCase());
