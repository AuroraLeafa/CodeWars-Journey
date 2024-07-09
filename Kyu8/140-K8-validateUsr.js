/* 
    Kyu 8
    Day 140 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
    CLEAR!!
*/

function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}

console.log(validateUsr("abcDEFGH123_")); // False
console.log(validateUsr("abcdefghij123_")); // True
