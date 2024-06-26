/* 
    Kyu 7
    Day 33 - Code Wars Challenge
    Link : https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
    CLEAR!!
*/

// const number = (array) => {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(`${i + 1} : ${array[i]}`);
//   }
//   return newArr;
// };

const number = array => array.map((input, index) => `${index + 1}: ${input}`)

console.log(number(["a", "b", "c"]));
