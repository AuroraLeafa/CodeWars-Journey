/* 
    Day 35 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53dc23c68a0c93699800041d
    CLEAR !!
*/

// function smash (words) {
//    let newArr = '';
//    for (let i = 0; i < words.length; i++) {
//       if(i !== words.length - 1){
//          newArr += words[i] + ' '
//       } else {
//          newArr += words[i]
//       }
//    }
//    return newArr
// };

const smash = words => words.join(" ")

console.log(smash(["hello", "amazing", "world"]));