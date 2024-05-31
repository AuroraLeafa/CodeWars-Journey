/* 
    Kyu 8
    Day 109 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5302d846be2a9189af0001e4
    CLEAR!!
*/

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city.concat(", ", state)}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
