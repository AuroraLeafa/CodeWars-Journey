/* 
    Kyu 8
    Day 113 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
    CLEAR!!
*/

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)))
}

console.log(dutyFree(12, 50, 1000));