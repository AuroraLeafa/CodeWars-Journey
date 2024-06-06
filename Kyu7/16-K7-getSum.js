/* 
    Kyu 7
    Day 16 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55f2b110f61eb01779000053
    CLEAR!!
*/

function getSum(a, b) {
  if (a === b) return a;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(5, 5));
console.log(getSum(1, 5));
