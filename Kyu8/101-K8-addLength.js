/* 
    Kyu 8
    Day 101 - Code Wars Challenge
    Link : https://www.codewars.com/kata/559d2284b5bb6799e9000047
    CLEAR!!
*/

const addLength = (str) => str.split(" ").map(word => `${word} ${word.length}`)

console.log(addLength("Lorem Ipsum Dolor Sit Amet"));
console.log(addLength("TESTING ONE TWO THREE"));
console.log(addLength("MY NAME'S JEFF"));
