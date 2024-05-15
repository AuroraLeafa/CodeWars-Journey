/* 
    Day 39 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55225023e1be1ec8bc000390/
    CLEAR !!
*/

// function greet(name) {
//   if (name === "Johnny") return "Hello, my love!";
//   return "Hello, " + name + "!";
// }

const greet = name => "Hello, " + (name === 'Johnny' ? "my love!" : name) + "!";

console.log(greet("Johnny"));
