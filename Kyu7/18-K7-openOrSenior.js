/* 
    Kyu 7
    Day 18 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
    CLEAR!!
*/

// function openOrSenior(data) {
//   let [age, handicap] = [], categories = [];
//   for (let i = 0; i < data.length; i++) {
//     [age, handicap] = data[i];
//     if (age >= 55 && handicap > 7) {
//       categories.push("Senior");
//     } else {
//       categories.push("Open");
//     }
//   }
//   return categories;
// }

const openOrSenior = (data) =>
  data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );

console.log(
  openOrSenior([
    [25, 2],
    [32, -2],
    [69, 10],
    [1, 1],
    [55, 0],
    [70, 10],
  ])
);
