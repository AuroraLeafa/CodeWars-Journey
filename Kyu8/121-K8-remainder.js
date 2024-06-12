/* 
    Kyu 8
    Day 121 - Code Wars Challenge
    Link : https://www.codewars.com/kata/524f5125ad9c12894e00003f
    CLEAR!!
*/

const remainder = (n, m) => n > m ? n % m : m % n;

console.log(remainder(17, 5));
console.log(remainder(5, 17));
console.log(remainder(5, 0));
console.log(remainder(0, 5));
console.log(remainder(-1, 0));
console.log(remainder(0, -1));
