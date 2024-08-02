/* 
    Kyu 8
    Day 123 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5834fec22fb0ba7d080000e8
    CLEAR!!
*/

// function sixToast(num) {
//   if (num < 6) return 6 - num;
//   if (num > 6) return num - 6;
// }

// const sixToast = (num) => num < 6 ? 6 - num : num - 6

const sixToast = (num) => Math.abs(num - 6)

;

console.log(sixToast(6));
console.log(sixToast(1));
console.log(sixToast(0));
console.log(sixToast(5));
console.log(sixToast(9));
console.log(sixToast(10));
console.log(sixToast(11));
console.log(sixToast(12));
console.log(sixToast(13));