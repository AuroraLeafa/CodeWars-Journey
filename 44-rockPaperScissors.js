/* 
    Day 44 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5672a98bdbdd995fad00000f/
    CLEAR !!
*/

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   }
//   if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock") ||
//     (p1 === "rock" && p2 === "scissors")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

const rps = (p1, p2) => {
    let rules = {
        scissors: "paper",
        paper: "rock",
        rock: "scissors",
      };

      if (p1 === p2){
        return "Draw!"
      }else{
        return `${(rules[p1] == p2) ? 'Player 1' : 'Player 2'} won!`
      }
}

console.log(rps('rock', 'paper'));