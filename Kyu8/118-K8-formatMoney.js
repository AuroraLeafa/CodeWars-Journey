/* 
    Kyu 8
    Day 118 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55902c5eaa8069a5b4000083
    CLEAR!!
*/

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(43));
console.log(formatMoney(5.1));
console.log(formatMoney(4.0234));
console.log(formatMoney(0.55999));