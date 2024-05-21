/* 
    Kata 8
    Day 102 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5704aea738428f4d30000914
    CLEAR!!
*/

function tripleTrouble(one, two, three) {
  let str = "";
  for (let i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i]
  }
  return str;
}

console.log(tripleTrouble("abc", "def", "ghi"));
