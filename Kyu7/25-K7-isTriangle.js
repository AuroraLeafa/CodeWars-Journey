/* 
    Kyu 7
    Day 25 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56606694ec01347ce800001b
    CLEAR!!
*/

const isTriangle = (a, b, c) => {
  if (a < 1 || b < 1 || c < 1) return false;
  return a + b > c && b + c > a && a + c > b;
}

console.log(isTriangle(1,2,3));
console.log(isTriangle(4,4,2));
console.log(isTriangle(5,5,2));
console.log(isTriangle(5,10,5));
