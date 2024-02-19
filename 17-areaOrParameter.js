/* 
    Day 17 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5ab6538b379d20ad880000ab/
    CLEAR !!
*/

const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * (l+w);

console.log(areaOrPerimeter(5, 3));