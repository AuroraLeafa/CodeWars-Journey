/* 
    Kyu 8
    Day 120 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5761a717780f8950ce001473
    CLEAR!!
*/

function calculateAge(a, b) {
  if (a < b) return `You are ${b - a} ${b - a === 1 ? "year" : "years"} old.`;
  if (a > b) return `You will be born in ${a - b} ${a - b === 1 ? "year" : "years"}.`;
  if (a === b) return `You were born this very year!`;
}

console.log(calculateAge(2011, 2012));
console.log(calculateAge(2000, 1999));
