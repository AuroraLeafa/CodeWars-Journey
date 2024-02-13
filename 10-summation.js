/* 
    Day 10 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55d24f55d7dd296eb9000030
    CLEAR!!
*/

// const summation = (num) => {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// };

const summation = (...num) => {
    return Array.from({length: num}, (_,index) => index+1).reduce((curr, acc) => curr + acc, 0)
};

console.log(summation(8));
