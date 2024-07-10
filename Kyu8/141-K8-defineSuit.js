/* 
    Kyu 8
    Day 141 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5a360620f28b82a711000047
    CLEAR!!
*/

// function defineSuit(card) {
//   return card.slice(-1) === "♣"
//     ? "clubs"
//     : card.slice(-1) === "♦"
//     ? "diamonds"
//     : card.slice(-1) === "♥"
//     ? "hearts"
//     : "spades";
// }

const defineSuit = card => ({
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
})[card.slice(-1)];

console.log(defineSuit("4♣"));