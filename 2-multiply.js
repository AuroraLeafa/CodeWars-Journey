/* 
    Day 2 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/
    CLEAR!!
*/

// const multiply = number => {
//     let digits = Math.abs(number).toString().length;
//     return number * Math.pow(5, digits)
// }

const multiply = number => number * 5 ** String(Math.abs(number)).length


console.log(multiply(-2));