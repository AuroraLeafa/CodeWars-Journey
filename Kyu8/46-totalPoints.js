/* 
    Day 46 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5bb904724c47249b10000131/
    CLEAR !!
*/

// function points(games) {
//     let points = 0
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             points += 3;
//         } else if(games[i][0] < games[i][2]){
//             points += 0;
//         } else{
//             points += 1;
//         }
//     }
//     return points
// }

const points = games => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0)

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
