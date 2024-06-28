/* 
    Kyu 8
    Day 134 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
    CLEAR!!
*/

// function elevator(left, right, call) {
//   const leftDistance = Math.abs(left - call);
//   const rightDistance = Math.abs(right - call);
//   if (leftDistance < rightDistance) {
//     return "left";
//   } else if (rightDistance < leftDistance) {
//     return "right";
//   } else {
//     return "right";
//   }
// }

const elevator = (left, right, call) => Math.abs(left-call) < Math.abs(right-call) ? "left" : "right"

console.log(elevator(0, 2, 1));
console.log(elevator(0, 1, 1));
console.log(elevator(0, 0, 1));
console.log(elevator(1, 0, 1));
console.log(elevator(1, 0, 2));
