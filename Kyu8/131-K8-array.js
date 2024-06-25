/* 
    Kyu 8
    Day 131 - Code Wars Challenge
    Link : https://www.codewars.com/kata/570597e258b58f6edc00230d
    CLEAR!!
*/

// function array(str) {
//     let newArr = str.split(",")
//     newArr.pop()
//     newArr.shift()
//     return newArr.length ? newArr.join(" ") : null
// }

const array = str => str.split(",").length <= 2 ? null : str.split(",").slice(1,-1).join(" ")


console.log(array('A1,B2,C3,D4,E5'));
console.log(array('1'));
console.log(array('1,3'));
