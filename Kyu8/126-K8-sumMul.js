/* 
    Kyu 8
    Day 126 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57241e0f440cd279b5000829
    CLEAR!!
*/

function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  let sum = 0
  for (let i = n; i < m; i+=n) {
    sum += i
  }
  return sum
}


console.log(sumMul(0, 0));
console.log(sumMul(1, 0));
console.log(sumMul(4, -7));
console.log(sumMul(2, 9));
console.log(sumMul(2, 10));
