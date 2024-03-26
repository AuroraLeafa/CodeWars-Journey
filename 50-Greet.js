/* 
    Day 50 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5772da22b89313a4d50012f7/
    CLEAR !!
*/

// function greet(name, owner) {
//   if (name === owner) return "Hello boss";
//   return "Hello guest";
// }

// const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

console.log(greet("Daniel", "Trasher"));
console.log(greet("Daniel", "Daniel"));