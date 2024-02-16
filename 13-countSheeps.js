/* 
    Day 13 - Code Wars Challenge
    Link : https://www.codewars.com/kata/54edbc7200b811e956000556/
    CLEAR !!
*/

// function countSheeps(sheep) {
//   let x = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     sheep[i] === true ? x++ : 0;
//   }
//   return x;
// }

// const countSheeps = sheep => sheep.filter(Boolean).length;

const countSheeps = sheep => sheep.reduce((acc, sheep) => acc + (sheep ? 1 : 0), 0);


console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
