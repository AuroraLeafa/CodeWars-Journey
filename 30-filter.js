/* 
    Day 30 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57cc975ed542d3148f00015b
    CLEAR !!
*/

// function check(a, x) {
//     for (let i = 0; i <= a.length; i++) {
//         if(a[i] === x){
//             return true
//         }
//     }
//     return false
//   }

// const check = (a, x) => a.filter(s => s == x).length > 0

const check = (a, x) => a.includes(x)

console.log(check([1,2,'re',4], 're'));