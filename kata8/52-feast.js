/* 
    Day 52 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5aa736a455f906981800360d
    CLEAR !!
*/

// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
// }

const feast = (beast, dish) => beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length-1])

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));
