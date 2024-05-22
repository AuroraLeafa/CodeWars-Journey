/* 
    Day 23 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53af2b8861023f1d88000832/
    CLEAR !!
*/

// function areYouPlayingBanjo(name) {
//     return name[0] == "R" || name[0] == "r" ? `${name} plays banjo` : `${name} does not play banjo`;
// }

const areYouPlayingBanjo = name => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("Refan"));
console.log(areYouPlayingBanjo("raven"));
console.log(areYouPlayingBanjo("Evan"));