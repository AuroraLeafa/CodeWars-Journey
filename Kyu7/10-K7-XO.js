/* 
    Kyu 7
    Day 10 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55908aad6620c066bc00002a
    CLEAR!!
*/

// function XO(str) {
//   let countX = 0, countO = 0, newStr = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (newStr[i] === "x") countX++;
//     if (newStr[i] === "o") countO++;
//   }
//   return countX == countO;
// }

const XO = (str) => {
  let newStr = str.toLowerCase();
  let countX = newStr.split("").filter((x) => x === "x").length;
  let countO = newStr.split("").filter((x) => x === "o").length;
  return countX === countO;
};

console.log(XO("XxXOoOooXX"));
