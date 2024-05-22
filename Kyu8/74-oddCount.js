/* 
    Day 74 - Code Wars Challenge
    Link : https://www.codewars.com/kata/59342039eb450e39970000a6
    CLEAR!!
*/

// function oddCount(n){
//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     if(i % 2 !== 0){
//         res += 1;
//     }
//   }
//   return res;
// }

const oddCount = n => Math.floor(n / 2)

console.log(oddCount(7));
console.log(oddCount(24));