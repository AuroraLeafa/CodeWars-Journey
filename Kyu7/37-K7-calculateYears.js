/* 
    Kyu 7
    Day 37 - Code Wars Challenge
    Link : https://www.codewars.com/kata/563f037412e5ada593000114
    CLEAR!!
*/

function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    principal += (principal * interest) * (1 - tax);
    year++;
  }
  return principal === desired ? 0 : year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1000)); //0;
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); //14;
console.log(calculateYears(1000, 0.05, 0.18, 1100)); //3;
