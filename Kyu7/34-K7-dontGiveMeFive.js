/* 
    Kyu 7
    Day 34 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5813d19765d81c592200001a
    CLEAR!!
*/

// function dontGiveMeFive(start, end) {
//   let res = 0;
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes("5")) {
//         res++
//     }
//   }
//   return res
// }

const dontGiveMeFive = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(
    (num) => !num.toString().includes("5")
  ).length;
};

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
