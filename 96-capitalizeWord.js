/* 
    Day 96 - Code Wars Challenge
    Link : https://www.codewars.com/kata/595970246c9b8fa0a8000086
    CLEAR!!
*/

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);

console.log(capitalizeWord("testing"));
console.log(capitalizeWord("why are we still here?"));
console.log(capitalizeWord("just to suffer"));