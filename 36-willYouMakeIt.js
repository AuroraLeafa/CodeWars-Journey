/* 
    Day 36 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5861d28f124b35723e00005e/
    CLEAR !!
*/

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / (mpg * fuelLeft) <= 1;
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / (mpg * fuelLeft) <= 1;

console.log(zeroFuel(100, 50, 1));
