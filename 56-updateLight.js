/* 
    Day 56 - Code Wars Challenge
    Link : https://www.codewars.com/kata/58649884a1659ed6cb000072
    CLEAR !!
*/

// function updateLight(current) {
//   if (current === "green") return "yellow";
//   if (current === "yellow") return "red";
//   if (current === "red") return "green";
// }

// const updateLight = current => {
//   let rules = {
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   };
//   return rules[current];
// }

// const updateLight = current => ({green : "yellow", yellow: "red", red:"green"})[current]

const updateLight = current => current === 'green' ? 'yellow' : current === "yellow" ? "red" : "green"

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
