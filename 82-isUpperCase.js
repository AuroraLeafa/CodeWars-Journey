/* 
    Day 82 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
    CLEAR!!
*/

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

console.log("TESTING OUT".isUpperCase());
console.log("testing out".isUpperCase());