/* 
    Kyu 8
    Day 112 - Code Wars Challenge
    Link : https://www.codewars.com/kata/588417e576933b0ec9000045
    CLEAR!!
*/

// function multipleOfIndex(array) {
//   let newArr = [];
//   if (array[0] === 0) newArr.push(0);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % i === 0) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }

const multipleOfIndex = (array) => array.filter((nums, idx) => nums % idx === 0 || nums === 0);

console.log(multipleOfIndex([0, 22, -6, 32, 82, 9, 25]));
