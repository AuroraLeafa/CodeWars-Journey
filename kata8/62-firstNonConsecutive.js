/* 
    Day 62 - Code Wars Challenge
    Link : https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
    CLEAR !!
*/

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4, 99, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));
