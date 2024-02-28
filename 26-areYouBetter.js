/* 
    Day 26 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5601409514fc93442500010b
    CLEAR !!
*/

// function betterThanAverage(classPoints, yourPoints) {
//   let totalPoints = 0;
//   for (const element of classPoints) {
//     totalPoints += element;
//   }
//   const avg = (totalPoints + yourPoints) / (classPoints.length + 1);
//   return yourPoints > avg;
// }

// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints);
//   const avg = classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;
//   return yourPoints > avg;
// }

const betterThanAverage = (classPoints, yourPoints) => yourPoints > (classPoints.reduce((acc, curr) => acc + curr, 0) + yourPoints) / (classPoints.length + 1)

console.log(betterThanAverage([9, 5, 4, 5, 1], 9));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 10));
