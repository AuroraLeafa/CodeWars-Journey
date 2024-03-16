/* 
    Day 41 - Code Wars Challenge
    Link : https://www.codewars.com/kata/568d0dd208ee69389d000016/
    CLEAR !!
*/

// function rentalCarCost(d) {
//   let rentCost = 40 * d;
//   if (d >= 7) {
//     return (rentCost -= 50);
//   } else if (d >= 3) {
//     return (rentCost -= 20);
//   } else {
//     return rentCost;
//   }
// }

const rentalCarCost = d => (d * 40) - (d >= 7 ? 50 : d >= 3 ? 20 : 0)

console.log(rentalCarCost(3));
