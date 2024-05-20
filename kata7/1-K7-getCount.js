/* 
    Kata 7
    Day 1 - Code Wars Challenge
    Link : https://www.codewars.com/kata/54ff3102c1bad923760001f3
    CLEAR!!
*/

function getCount(str) {
  return str.split("").filter(x => /[aiueo]/.test(x)).length;
}

console.log(getCount("abcdefg eee aaaaa sdsdsds"));
