/* 
    Kyu 7
    Day 24 - Code Wars Challenge
    Link : https://www.codewars.com/kata/563b662a59afc2b5120000c6
    CLEAR!!
*/

function nbYear(p0, percent, aug, p) {
  let year = 0;
  while (p0 < p) {
    p0 += Math.floor(p0 * (percent / 100) + aug);
    year++;
  }
  return year;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
