/* 
    Day 94 - Code Wars Challenge
    Link : https://www.codewars.com/kata/586c1cf4b98de0399300001d
    CLEAR!!
*/

// function combat(health, damage) {
//   let currHp = health - damage;
//   if (currHp <= 0) return 0;
//   return currHp;
// }

// const combat = (heatlh, damage) => damage > health ? 0 : health - damage;

const combat = (heatlh, damage) => Math.max(0, heatlh - damage);

console.log(combat(50, 55));
console.log(combat(75, 50));
console.log(combat(75, 90));