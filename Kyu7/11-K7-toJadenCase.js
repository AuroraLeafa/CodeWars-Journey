/* 
    Kyu 7
    Day 11 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55908aad6620c066bc00002a
    CLEAR!!
*/

String.prototype.toJadenCase = function () {
  return this.split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
};

console.log("test the protoype in 1 2 3".toJadenCase());