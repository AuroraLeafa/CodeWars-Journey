/* 
    Day 63 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5b853229cfde412a470000d0/
    CLEAR !!
*/

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - (2 * sonYearsOld));

console.log(twiceAsOld(55, 30));
