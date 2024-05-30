/* 
    Kyu 7
    Day 9 - Code Wars Challenge
    Link : https://www.codewars.com/kata/54c27a33fb7da0db0100040e
    CLEAR!!
*/

// const isSquare = (n) => n === 0 ? true : Math.sqrt(n) === Math.floor(Math.sqrt(n));
const isSquare = (n) => Math.sqrt(n) % 1 === 0

console.log(isSquare());