/* 
    Day 60 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5875b200d520904a04000003/
    CLEAR !!
*/

// function enough(cap, on, wait) {
//   return cap >= on + wait ? 0 : (on + wait) - cap;
// }

const enough = (cap, on, wait) => cap >= on + wait ? 0 : (on + wait) - cap

console.log(enough(100, 50, 50)); // 0
console.log(enough(100, 10, 50)); // 10
console.log(enough(100, 80, 50)); // 10
