/* 
    Day 59 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
    CLEAR !!
*/

// function removeEveryOther(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(i === 0 || i % 2 === 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
//   }

const removeEveryOther = (arr) => arr.filter((_, index) => index === 0 || index % 2 === 0);

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
