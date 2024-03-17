/* 
    Day 42 - Code Wars Challenge
    Link : https://www.codewars.com/kata/577a98a6ae28071780000989/
    CLEAR !!
*/

const min = list => list.sort((a, b) => a - b)[0]
const max = list => list.sort((a, b) => a - b).pop()

// const min = list => Math.min(...list);
// const max = list => Math.max(...list);


console.log(min([50,40,100,1000,20,1,300]));
console.log(max([50,40,100,1000,20,1,300]));