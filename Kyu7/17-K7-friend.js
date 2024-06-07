/* 
    Kyu 7
    Day 17 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55b42574ff091733d900002f
    CLEAR!!
*/

// function friend(friends) {
//   let name = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length === 4) name.push(friends[i]);
//   }
//   return name;
// }

const friend = (friends) => friends.filter(name => name.length === 4)

console.log(friend(["Jake", "Reff", "Logan", "Deadpool", "Magneto", "Cyclops", "Psyc"]));