/* 
    Kyu 8
    Day 122 - Code Wars Challenge
    Link : https://www.codewars.com/kata/568dc014440f03b13900001d
    CLEAR!!
*/

// function getDrinkByProfession(param) {
//   switch (param.toLowerCase()) {
//     case "jabroni":
//       return "Patron Tequila";
//     case "school counselor":
//       return "Anything with Alcohol";
//     case "programmer":
//       return "Hipster Craft Beer";
//     case "bike gang member":
//       return "Moonshine";
//     case "politician":
//       return "Your tax dollars";
//     case "rapper":
//       return "Cristal";
//     default:
//       return "Beer";
//   }
// }

const namely = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

const getDrinkByProfession = (param) => namely[param.toLowerCase()] || "Beer";

console.log(getDrinkByProfession("jabroni"));
console.log(getDrinkByProfession("rapper"));
console.log(getDrinkByProfession("teacher"));
