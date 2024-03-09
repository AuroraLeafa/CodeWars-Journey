/* 
    Day 31 - Code Wars Challenge
    Link : https://www.codewars.com/kata/59ca8246d751df55cc00014c/
    CLEAR !!
*/

// function hero(bullets, dragons) {
//   const totalBulletNeeded = dragons * 2;
//   if (bullets >= totalBulletNeeded) return true;
//   return false;
// }

const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(54, 30));
