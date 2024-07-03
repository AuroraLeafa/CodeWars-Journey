/* 
    Kyu 7
    Day 38 - Code Wars Challenge
    Link : https://www.codewars.com/kata/534ea96ebb17181947000ada
    CLEAR!!
*/

const breakChocolate = (n, m) => n <= 0 || m <= 0 ? 0 : (n * m) - 1

console.log(breakChocolate(3,4));
console.log(breakChocolate(1,4));
console.log(breakChocolate(5,3));
console.log(breakChocolate(3,0));
console.log(breakChocolate(0,4));
console.log(breakChocolate(1,-4));