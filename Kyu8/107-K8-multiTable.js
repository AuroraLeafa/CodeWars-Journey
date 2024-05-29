/* 
    Kyu 8
    Day 107 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
    CLEAR!!
*/

function multiTable(number) {
  let res = ''
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${i * number} ${i < 10 ? "\n" : ""}`;
  }
  return res
}

console.log(multiTable(3));
