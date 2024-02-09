/* 
    Day 6 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53369039d7ab3ac506000467/
    CLEAR!!
*/

// function boolToWord( bool ){
//     if(true){
//       return "Yes";
//     } else if(false){
//       return "No"
//     }
//   }

const boolToWord = bool => bool === true ? "Yes" : "No"

  console.log(boolToWord(true));