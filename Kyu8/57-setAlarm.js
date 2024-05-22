/* 
    Day 57 - Code Wars Challenge
    Link : https://www.codewars.com/kata/568dcc3c7f12767a62000038/
    CLEAR !!
*/

// function setAlarm(employed, vacation){
//     return employed === true && vacation === false
// }

const setAlarm = (employed, vacation) => (employed && !vacation)

console.log(setAlarm(true, false));
console.log(setAlarm(false, false));
console.log(setAlarm(true, true));