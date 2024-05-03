/* 
    Day 84 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
    CLEAR!!
*/

let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

// function gooseFilter(birds) {
//   let newArr = [];
//   for (const bird of birds) {
//     if (!geese.includes(bird)) {
//       newArr.push(bird);
//     }
//   }
//   return newArr;
// }

const gooseFilter = (birds) => {
  return birds.filter((bird) => !geese.includes(bird));
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
