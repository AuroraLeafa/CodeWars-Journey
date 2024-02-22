/* 
    Day 20 - Code Wars Challenge
    Link : https://www.codewars.com/kata/555086d53eac039a2a000083/
    CLEAR !!
*/

// function lovefunc(flower1, flower2) {
//     if(flower1 % 2 === 0 && flower2 % 2 === 1){
//         return true;
//     }else if (flower1 % 2 === 1 && flower2 % 2 === 0){
//         return true;
//     }else{
//         return false
//     }
// }

// const lovefunc = (flower1, flower2) => {
//     if(flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0){
//         return true;
//     } return false
// }

const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2

console.log(lovefunc(1,0));
